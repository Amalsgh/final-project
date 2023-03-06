// IMPORT

import axios from 'axios';
import {
  FAIL_PRODUCT,
  LOAD_PRODUCT,
  ONE_PRODUCT,
  SUCC_PRODUCT,
} from '../ActionType/product';

// GET ALL PRODUCTS
export const getProducts=()=>async (dispatch)=>{
  dispatch ({type:LOAD_PRODUCT})
  try {
    let result = await axios.get('/api/product/all')
    dispatch ({type:SUCC_PRODUCT,payload:result.data})
  } catch (error) {
    dispatch({type:FAIL_PRODUCT,payload:error.response})
  }
}

// ADD PRODUCT
export const addProduct = (newProduct) => async (dispatch) => {
  try {
    await axios.post('/api/product/add', newProduct);
    dispatch(getProducts());
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
};

// DELETE PRODUCT
export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/product/${id}`);
    dispatch(getProducts());
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
};

// EDIT PRODUCT
export const editproduct = (id, newProduct) => async (dispatch) => {
  try {
    await axios.put(`/api/product/${id}`, newProduct);
    dispatch(getProducts());
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
};

// GET ONE PRODUCT
export const getProduct = (id) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCT });
  try {
    let result = await axios.get(`/api/product/${id}`);
    dispatch({ type: ONE_PRODUCT, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_PRODUCT, payload: error.response });
  }
};
