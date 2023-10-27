import { combineReducers } from 'redux'
import productReducer from './productReducer'
import userReducer from './userReducer'
import addItems from "./cardReducer"
import ErrorReducer from"./errorReducer"

export default combineReducers({
    productReducer,
    userReducer,
    addItems,ErrorReducer
})