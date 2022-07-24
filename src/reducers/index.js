import registerReducer from "./register";
import {combineReducers} from 'redux';
import loginReducer from "./login"


const AllReducers=combineReducers({
    login: loginReducer,
    register:registerReducer,
    
});

export default AllReducers;


