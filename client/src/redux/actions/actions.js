import axios from "axios";
import Swal from 'sweetalert2';
import { GET_PRODUCT } from "../actions/actionsType";
export const get_product=()=>async(dispatch)=>{
    try {
        await axios.get(`http://localhost:5679/api/getPost`).then((res)=>
         dispatch({type:GET_PRODUCT,payload:res.data}))
        
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