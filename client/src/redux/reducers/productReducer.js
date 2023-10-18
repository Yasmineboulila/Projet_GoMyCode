import { GET_PRODUCT } from "../actions/actionsType"

const initialState = {
    product:[]
  
  }
  
  const postReducer= (state = initialState, { type, payload }) => {
    switch (type) {
  
    case GET_PRODUCT:
      return { ...state, product:payload }
  
    default:
      return state
    }
  }
  export default postReducer