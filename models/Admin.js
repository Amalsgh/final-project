const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const AdminSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  secondname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: Number,
  
  isAdmin: {
    type: Boolean,
  },
});

module.exports = Admin = model('admin', AdminSchema);
