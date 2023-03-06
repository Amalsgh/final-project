// require mongoose
const mongoose = require('mongoose');

// create schema
const { Schema, model } = mongoose;

const UserSchema = new Schema({
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
});

module.exports = User = model('user', UserSchema);
