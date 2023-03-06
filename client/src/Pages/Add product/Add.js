import React, { useState } from 'react';
import './Add.css'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct } from '../../JS/Actions/product';

const Add = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    categorie: "",
    description: "",
    price: "",
    image: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const [file, setFile] = useState(null)

  const uploadImg = (e) => {
    setFile(e.target.files(0))
  }

  const add = () => {
    dispatch(addProduct(newProduct));
  };

  return (
    <div className='addproduct'>
      <h1 id="titre">Ajouter un Produit</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nom de l'article</Form.Label>
          <Form.Control
            type="text"
            placeholder="Saisir le nom de l'article"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
          />
          <Form.Label>Catégorie de l'article </Form.Label>
          <Form.Control
            type="text"
            placeholder="Saisir la catégorie de l'article"
            name="categorie"
            value={newProduct.categorie}
            onChange={handleChange}
          />
          <Form.Label>Description de l'article</Form.Label>
          <Form.Control
            type="text"
            placeholder="Saisir la description de l'article"
            name="description"
            value={newProduct.description}
            onChange={handleChange}
          />
          <Form.Label>Prix de l'article</Form.Label>
          <Form.Control
            type="text"
            placeholder="Saisir le prix de l'article"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
          />
        
        <Form.Label>Image de l'article</Form.Label>
          <input type="file" onChange={uploadImg} /> 


        </Form.Group>

        <Button className='ajouter' variant="primary" type="submit" onClick={() => add()}>
          <Link to="/products">Ajouter l'article </Link>
        </Button>
      </Form>
    </div>
  );
};

export default Add;

