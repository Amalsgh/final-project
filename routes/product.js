const express = require('express');
const {
  allproducts,
  deleteproduct,
  editproduct,
  oneProduct,
  
} = require('../controllers/product');
const Product = require('../models/Product');
const cloudinary = require('../utils/cloudinary');
const upload = require('../utils/multer');
const router = express.Router();

// Routes
// add new product

router.post('/add', upload.single("image"),async (req, res)=> {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "Pépinière",
    })
    let newProduct = new Product ({
      name:req.body.name,
        categorie:req.body.categorie,
        description:req.body.description,
        price:req.body.price,
        image: result.secure_url,
        cloudinary_id: result.public_id,
    });
    await newProduct.save();
    res.status(200).send({ msg: 'Product add successfully', newProduct });
  } catch (error) {
  res.status(400).send({ msg: 'Can not add product !', error });
}
});

// add product 
// router.post('/add', addProduct)
// get all products
router.get('/all', allproducts);

// delete product
router.delete('/:_id', deleteproduct);

// edit product
router.put('/:_id', editproduct);

// get one product
router.get('/:id',oneProduct)


module.exports = router;
