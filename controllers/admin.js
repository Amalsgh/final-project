const Admin = require("../models/Admin");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

exports.registerAdmin = async (req, res) => {
    try {
      const { firstname, secondname, email, password, phone, isAdmin } = req.body;
      const foundAdmin = await Admin.findOne({ email });
      if (foundAdmin) {
        return res
          .status(400)
          .send({ errors: [{ msg: 'Email already exists' }] });
      }
  
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      // newUser
      const newAdmin = new Admin({ ...req.body });
      newAdmin.password = hashedPassword;
      // save
      await newAdmin.save();
      // creation tokken
      const token = jwt.sign(
        {
          id: newAdmin._id,
        },
        process.env.SECRET_KEY,
        { expiresIn: '168h' }
      );
      res
        .status(200)
        .send({ msg: 'Admin saves successfully.', user: newAdmin, token });
    } catch (error) {
      res.status(400).send({ error: [{ msg: 'Can not register admin !!' }] });
    }
  };



exports.loginAdmin = async(req,res) =>{
    try {
        const {email , password } = req.body ;
        
        //check email existance : 
        const foundAdmin = await Admin.findOne({email})
        if (!foundAdmin){
            return res.status(400).send({errors : [{ msg : "bad credential !!"}]})
        }
        const checkPassword = await bcrypt.compare(password,  foundAdmin.password)
        if (!checkPassword){
        return res.status(400).send({errors : [{ msg : "bad credential !!"}]})
    }
    const token = jwt.sign({
        id : foundAdmin._id,  isAdmin : foundAdmin.isAdmin 
    },
    process.env.SECRET_KEY,{expiresIn: "144h"}
    )
    res.status(200).send ({msg : "Login successfully." , admin : foundAdmin , token})

    } catch (error) {
        res.status(400).send({errors : [{ msg : "Can not login !!"}]})
        
    }
}
