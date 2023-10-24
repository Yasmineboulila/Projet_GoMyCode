import { combineReducers } from 'redux'
import productReducer from './productReducer'
import userReducer from './userReducer'
import addItems from "./cardReducer"

export default combineReducers({
    productReducer,
    userReducer,
    addItems
})