import { combineReducers } from "redux";
import contactReducer from './ContactReducer'
import AuthReducer from './AuthReducer'
import UserReducer from './UserReducer'

const RootReducer = combineReducers({contactReducer, AuthReducer, UserReducer})


export default RootReducer