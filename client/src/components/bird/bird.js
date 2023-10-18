import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productList3 from './productList3'
import { get_product } from '../../redux/actions/actions'
import ProductList3 from './productList3'



 function Bird() {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(get_product())
        },[dispatch])

        const info = useSelector((state)=>state.productReducer.product)
        console.log(info)
  return (
    <div>

       {<ProductList3 data={info} />}
  

    </div>
  )
}
export default Bird