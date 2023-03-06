import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '../JS/Actions/product';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { addOrder } from '../JS/Actions/order';



const Productcard = ({product}) => {
   // const product = useSelector((state) => state.productReducer.product);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleAdd = () => {
    dispatch(addOrder());
  };
 
	
  return (
    <div>
       <div id="contain">
        <div className="product-details">
          <h1>{product.name}</h1>
          <span className="hint-star star">
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star-o" aria-hidden="true" />
          </span>
          <p className="information">{product.categorie}</p>
          <div className="control">
            <button className="btnnn"  >
              <span className="price">{product.price} DT</span>
              
              <span className="shopping-cart">
                <i className="fa fa-shopping-cart" aria-hidden="true" />
              </span>
              <span className="buy" onClick={() => handleAdd(navigate(`/panier/${product._id}`)) }>Ajouter au panier</span>
            </button>
          
          </div>
        </div>
        
        <div className="product-image">
          <img src={product.image} alt="" />
          <div className="info">
            <h2> Description</h2>
            <ul>
              <li>
                <strong>{product.description} </strong>{' '}
              </li>
              <li>
                <strong>Shade : </strong>Olive green
              </li>
              <li>
                <strong>Decoration: </strong>balls and bells
              </li>
              <li>
                <strong>Material: </strong>Eco-Friendly
              </li>
            </ul>
          </div>
        </div> 
        </div> 
        
      
       {isAuthAdmin ? (
            <Button variant="danger" onClick={()=> dispatch (deleteProduct(product._id))}>
              <DeleteForeverIcon/>Supprimer le produit
            </Button>
          ) : null}
          {isAuthAdmin ? (
            <Button variant="danger" onClick={()=> navigate(`/editproduct/${product._id}`)}>
              <BorderColorIcon/>Modifier le produit
            </Button>
          ) : null}  
    </div>
  );
};

export default Productcard;
