import React from 'react';
// import OrderCard from '../../Components/OrderCard';
// import { getOrders } from '../../JS/Actions/order';

import DeleteIcon from '@mui/icons-material/Delete';




const Panier = () => {
 

  // useEffect(() => {
  //   dispatch(getOrders())
  // }, [dispatch])
 

  return (
    <div>
     

{/* <h1 className='Produit'>ORDERS</h1> */}
        {/* <div className='listMessages'>
        {/* {listOrders.map((el)=> <OrderCard newOrders={el} key={el._id}/>)} */}
        {/* </div>  */}


      <div className="CartContainer">
        <div className="Header">
          <h2 id="titre" >Mon Panier</h2>
        </div>
        
          <div className="Cart-Items">
            <div className="image-box">
              <img className="fraise" src='' alt="" />
            </div>
            <div className="about">
              <h1 className="title">cdfvgb</h1>
              <h3 className="desc">fvgbhn</h3>
            </div>
            <div className="prices">
              <div className="amount"></div>
              <div className="remove" >
              <DeleteIcon sx={{
            ml:"10px",
            mt: "20px",
            height: "30px",
            width: "30px",
            color:"black"}}/>
              </div>
        
             
            </div>
          </div>
        
        <div className="checkout">
          <div className="total">
            <div>
              <div className="Subtotal">Sub-Total$</div>
            </div>
            <div className="total-amount"></div>
          </div>
          <button className="buttoni">Commander</button>
        </div>
      </div> 
    </div>
  );
};

export default Panier;