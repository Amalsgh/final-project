// import
const {
  LOAD_USER,
  SUCC_USER,
  FAIL_USER,
  CURRENT_USER,
  LOGOUT_USER,
  CLEAR_ERRORS,
} = require('../ActionType/user');

// initial state
const initialState = {
  user: null,
  loadUser: false,
  errors: [],
  isAuth: false,
};

// pure function
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, loadUser: true };
    case SUCC_USER:
      localStorage.setItem('token', payload.token);
      return { ...state, loadUser: false, user: payload.user, isAuth: true };
    case FAIL_USER:
      return { ...state, loadUser: false, errors: payload };
    case CURRENT_USER:
      return { ...state, user: payload, loadUser: false, isAuth: true };
    case LOGOUT_USER:
      localStorage.removeItem('token');
      return {
        user: null,
        loadUser: false,
        errors: [],
        isAuth: false,
      };
    case CLEAR_ERRORS:
      return { ...state, errors: null };
    default:
      return state;
  }
};

export default userReducer;
