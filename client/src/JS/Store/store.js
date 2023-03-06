// import createStore
import { applyMiddleware, compose, createStore } from "redux";

// import rootReducers
import thunk from 'redux-thunk';
import rootReducer from "../Reducers";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__  || compose;

// store
const store = createStore (rootReducer , composeEnhancer(applyMiddleware(thunk)));

// export 
export default store;