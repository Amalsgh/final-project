// 1 require express
const express = require('express');
const { register, login } = require('../controllers/user');
const isAuth = require('../middleware/isAuth');
const {
  registerValidation,
  validation,
  loginValidation,
} = require('../middleware/validator');

// 2 express router
const router = express.Router();

/// Routes
// register
router.post('/register', registerValidation(), validation, register);

//login
router.post('/login', loginValidation(), validation, login);

// current user
router.get('/current', isAuth, (req, res) => {
  res.send('you are authorized to pass');
});

// 3 export
module.exports = router;
