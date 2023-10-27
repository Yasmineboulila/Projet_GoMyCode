
import { GET_CURRENT ,REGISTER, LOG_IN, LOG_OUT} from "../actions/actionsType";

const initialState = {
    user : {}
}

const userReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case GET_CURRENT : 
        return {...state,user:payload.user}
        case LOG_IN :
            case REGISTER:
            localStorage.setItem('token',payload.token)
            return {...state, user:payload.user}
            case LOG_OUT:
                localStorage.removeItem("token")
                return {user:{}}
        default : 
        return state
    }
}
export default userReducer
