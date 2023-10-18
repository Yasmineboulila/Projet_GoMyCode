import axios from "axios";
import Swal from 'sweetalert2';
import { GET_PRODUCT,LOG_IN,REGISTER ,GET_CURRENT, FAIL} from "../actions/actionsType";
export const get_product=()=>async(dispatch)=>{
    try {
        await axios.get(`http://localhost:5679/api/getPost`).then((res)=>{
         dispatch({type:GET_PRODUCT,payload:res.data.data})
         console.log(res.data)
        })
        
    } catch (error) {
        console.log(error)
    }
}
export const add_product=(data)=>async(dispatch)=>{
    
    try {
        await axios.post(`http://localhost:5679/api/createPost`,data)
        .then((res)=>{
            if (res.data==="poste done"){
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Product Created',
                  showConfirmButton: false,
                  timer: 1500
                })
              } 
              dispatch(get_product())
        })
        
    }
          catch (error) {
            console.log(error)
    }

}
export const update_product = (id,data) => async (dispatch) => {
    try {
       const res= await axios.put(`http://localhost:5679/api/updatePost/${id}`,data)
        if(res.data==="Product updated"){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Product updated',
              showConfirmButton: false,
              timer: 1500
            })
            dispatch(get_product())
            
          }

    } catch (error) {
     console.log(error)

    }
}
export const delete_product = (id) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:5679/api/deletePost/${id}`)
        dispatch(get_product())

    } catch (error) {
     console.log(error)

    }
}
// userActions
export const login =(data,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('http://localhost:5679/api/login',data)
        dispatch({
            type:LOG_IN,
            payload:res.data
        })
        navigate("/")
    } catch (error) {
        console.log(error)
        // error.response.data.errors.forEach((el) => {
        //     dispatch(alert_error(el.msg));
        //   });
        //   dispatch({ type: FAIL, payload: error.response.data });
        }
    }


export const register =(data,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('http://localhost:5679/api/createUser',data)
        dispatch({
            type:REGISTER,
            payload:res.data
        })
        navigate('/')
    } catch (error) {
        console.log(error)
        // error.response.data.errors.forEach((el) => {
        //     dispatch(alert_error(el.msg));
        //   });
        //   dispatch({ type: FAIL, payload: error.response.data });
        }
}
export const getCurrent= ()=>async(dispatch)=>{
    const config = {
     headers: {
         token: localStorage.getItem("token"),
       },
    }
     try {
         const res = await axios.get("http://localhost:5679/api/getCurrent",config)
         dispatch({
             type:GET_CURRENT,
             payload:res.data
         })
     } catch (error) {
         console.log(error)
     }
 }