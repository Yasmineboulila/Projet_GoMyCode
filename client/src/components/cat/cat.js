import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductList1 from './productList1'
import { get_product } from '../../redux/actions/actions'


 function Cat() {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(get_product())
        },[dispatch])

        const info = useSelector((state)=>state.productReducer.product)
        console.log(info)
       
  return (
    <div>

       {<ProductList1 data={info} />}
  

    </div>
  )
}
export default Cat