import loggedReducer from "./isLogged";
import counterReducer from "./counter";
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    counter: counterReducer,
    logged: loggedReducer
})

export default allReducer;