const express = require('express');
const { loginAdmin, registerAdmin } = require('../controllers/admin');
const { getallusers } = require('../controllers/user');
const isAuthAdmin = require('../middleware/isAuthAdmin');
const { loginValidation, validation, registerValidation } = require('../middleware/validator');

// Routes
const router = express.Router();

router.post('/loginAdmin', loginValidation(), validation, loginAdmin);
router.post('/registerAdmin', registerValidation(), validation, registerAdmin);
router.get ("/allusers" , getallusers)

router.get('/currentAdmin', isAuthAdmin, (req, res) => {
    res.send('you are authorized to pass');
  });
  

// export
module.exports = router;
