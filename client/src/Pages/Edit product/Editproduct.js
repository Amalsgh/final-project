import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import BorderColorIcon from '@mui/icons-material/BorderColor';

import { editproduct, getProduct } from '../../JS/Actions/product'
import './Edit.css'

const Editproduct = () => {
    const {_id} = useParams();
    const dispatch = useDispatch();
    const [newProduct, setNewProduct] =useState({
        name:"",
        categorie:"",
        description:"",
        price:""
    });
    const handleChange=(e)=> {
        setNewProduct({...newProduct, [e.target.name]: e.target.value})
    };
    const productToGet = useSelector((state)=> state.productReducer.productToGet)

    useEffect(()=> {
        dispatch(getProduct(`${_id}`))
    });

    const edit =()=> {
        dispatch (editproduct(_id, newProduct))
    };

  return (
    <div className='editproduct'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nom de l'article</Form.Label>
          <Form.Control
            type="text"
            placeholder={`${productToGet.name}`}
            name="name"
            value={newProduct.name}
            onChange={handleChange}
          />
          <Form.Label>Catégorie de l'article </Form.Label>
          <Form.Control
            type="text"
            placeholder={`${productToGet.categorie}`}
            name="categorie"
            value={newProduct.categorie}
            onChange={handleChange}
          />
          <Form.Label>Description de l'article</Form.Label>
          <Form.Control
            type="text"
            placeholder={`${productToGet.description}`}
            name="description"
            value={newProduct.description}
            onChange={handleChange}
          />
          <Form.Label>Prix de l'article</Form.Label>
          <Form.Control
            type="text"
            placeholder={`${productToGet.price}`}
            name="price"
            value={newProduct.price}
            onChange={handleChange}
          />
        
        {/* <Form.Label>Prix de l'article</Form.Label>
          <Form.Control
            type="text"
            placeholder="Saisir le prix de l'article"
            name="image"
            value={newProduct.image}
            onChange={handleChange}
          /> */}
        </Form.Group>

        <Button variant="primary" type="submit" onClick={edit} className="modifier">
          <Link to="/products"> <BorderColorIcon/>Enregistrer les modifications</Link>
        </Button>
      </Form>
    </div>
  )
}

export default Editproduct
