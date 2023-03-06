import React from 'react';
 import Productlist from '../../Components/Productlist';



const Products = () => {
  return (
    <div>
      
      <h1 id="titre">Nos produits</h1>
      <div className='listpro'>
        <Productlist /> 
      </div>
    </div>
  );
};

export default Products;
