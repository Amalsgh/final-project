// require mongoose
const mongoose = require('mongoose');

// create schema
const { Schema, model } = mongoose;

const ProductSchema = new Schema({
  name: String,
  categorie: String,
  description: String,
  price: Number,
  image : String,
},
{timestamps: true});

module.exports = Product = model('product', ProductSchema);
