const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { firstname, secondname, email, password, phone } = req.body;
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res
        .status(400)
        .send({ errors: [{ msg: 'Email already exists' }] });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // newUser
    const newUser = new User({ ...req.body });
    newUser.password = hashedPassword;
    // save
    await newUser.save();
    // creation tokken
    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: '24h' }
    );
    res
      .status(200)
      .send({ msg: 'User saves successfully.', user: newUser, token });
  } catch (error) {
    res.status(400).send({ error: [{ msg: 'Can not register user !!' }] });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // if email exists
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).send({ errors: [{ msg: 'Bad credentiall' }] });
    }
    const checkPassword = await bcrypt.compare(password, foundUser.password);
    if (!checkPassword) {
      return res.status(400).send({ errors: { msg: 'Bad credential' } });
    }
    // create token
    const token = jwt.sign(
      {
        id: foundUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: '48h' }
    );
    res.status(200).send({ msg: 'Login successfully.', user: foundUser, token });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: 'Can not login !!' }] });
  }
};

// all users
exports.getallusers = async (req,res) => {
  try {
      const listusers = await User.find();
      res.status(200).send({msg : 'Users list',listusers})
      
  } catch (error) {
      res.status(400).send({msg : 'cannot get all Users', error})
  }
}

