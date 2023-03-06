import axios from 'axios';
import { CURRENT_ADMIN, FAIL_ADMIN, GET_ALLUSERS, LOAD_ADMIN, LOGOUT_ADMIN, SUCC_ADMIN } from '../ActionType/admin';
import { LOAD_USER } from '../ActionType/user';

export const loginAdmin = (admin) => async (dispatch) => {
  dispatch({ type: LOAD_ADMIN });

  try {
    let result = await axios.post('/api/admin/loginAdmin', admin);
    dispatch({ type: SUCC_ADMIN, payload: result.data });
  } catch (error) {
    console.log(error);
  }
};


export const logoutAdmin = () => async (dispatch) => {
    dispatch ({ type : LOGOUT_ADMIN})
}


export const getallusers = () => async (dispatch) => {
    dispatch ({type : LOAD_USER})
    try {
        let result = await axios.get('/api/admin/allusers')
        dispatch ({ type : GET_ALLUSERS, payload : result.data.listusers})
    } catch (error) {
        console.log(error)
    }

  }

  // current
export const currentAdmin = () => async (dispatch) => {
  dispatch({ type: LOAD_ADMIN });
  try {
    const config = {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    };
    let result = await axios.get('/api/admin/currentAdmin', config);
    dispatch({ type: CURRENT_ADMIN, payload: result.data });
  } catch (error) {
    dispatch({ type: FAIL_ADMIN, payload: error.response.data.errors });
  }
};
