const Product = require('../models/Product');


// add product
exports.addProduct = async (req , res) =>{
  try {
    const {name, categorie, description, price} = req.body
    const newProduct = new Product ({name, categorie, description, price})
    await newProduct.save()
    res.status(200).send({msg:"Product add successfully", newProduct})
  }catch (error) {
    res.status(400).send({ msg: 'Can not add all the product!!', error });

  }
}

//get all product
exports.allproducts = async (req, res) => {
  try {
    const listProducts = await Product.find();
    res
      .status(200)
      .send({ msg: 'this is the list of all the products', listProducts });
  } catch (error) {
    res.status(400).send({ msg: 'Can not get all the products!!', error });
  }
};

// delete one product
exports.deleteproduct = async (req, res) => {
  try {
    const { _id } = req.params;
    await Product.findOneAndDelete({ _id });
    res.status(200).send({ msg: 'Product deleted' });
  } catch (error) {
    res
      .status(400)
      .send({ msg: 'Can not delete the product with this id !!', error });
  }
};
// edit product
exports.editproduct = async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await Product.updateOne({ _id }, { $set: { ...req.body } });
    res.status(200).send({ msg: 'Product updated' });
  } catch (error) {
    res
      .status(400)
      .send({ msg: 'Can not update the Product with this id !!', error });
  }
};

// get one product
exports.oneProduct = async (req, res) => {
  try {
    const productToGet = await Product.findOne({ _id: req.params.id });
    res.status(200).send({ msg: 'I get the product', productToGet });
  } catch (error) {
    res
      .status(400)
      .send({ msg: 'Can not find the product with this id !!', error });
  }
};
