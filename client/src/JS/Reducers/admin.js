import {
  CURRENT_ADMIN,
  FAIL_ADMIN,
  GET_ALLUSERS,
  LOAD_ADMIN,
  LOGOUT_ADMIN,
  SUCC_ADMIN,
} from '../ActionType/admin';

const initialState = {
  admin: null,
  loadAdmin: false,
  errors: null,
  isAdmin: false,
isAuthAdmin : false,
  listusers: [],
};

const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_ADMIN:
      return { ...state, loadAdmin: true };
    case SUCC_ADMIN:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        loadAdmin: false,
        admin: payload.admin,
        isAuthAdmin : true,
        isAdmin: true,
      };
    case GET_ALLUSERS:
      return {...state, listusers:payload, isAdmin:true, isAuthAdmin: true, loadAdmin: false}  
    case FAIL_ADMIN:
      return { ...state, loadAdmin: false, errors: payload };
    case CURRENT_ADMIN:
      return { ...state, admin: payload, loadAdmin: false, isAuthAdmin: true, isAdmin:true};
    case LOGOUT_ADMIN:
      localStorage.removeItem('token');
      return {
        admin: null,
        loadAdmin: false,
        errors: null,
        isAdmin: false,
        isAuthAdmin : false,
        listusers: [],
      };
    default:
      return state;
  }
};

export default adminReducer;
