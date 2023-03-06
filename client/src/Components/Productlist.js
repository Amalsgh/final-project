import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../JS/Actions/product';
import Productcard from './Productcard';

const Productlist = () => {
  const listProducts = useSelector(
    state => state.productReducer.listProducts
  );
 
  const dispatch = useDispatch();
  const load = useSelector(state => state.productReducer.load);

useEffect(()=>{
  dispatch (getProducts())
 },[dispatch])

  return (
    <div>
      {load ? 
        <h2>LOADING...</h2>
      : 
        listProducts.map((el) => <Productcard product={el}  key={el._id} />)
      }
    </div>
  );
};

export default Productlist;
