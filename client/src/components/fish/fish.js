import React , { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductList4 from './productList4'
import { get_product } from '../../redux/actions/actions'
export default function Fish() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(get_product())
        },[dispatch])

        const info = useSelector((state)=>state.productReducer.product)
        console.log(info)
  return (
    <div>
      {<ProductList4 data={info} />}
    </div>
  )
}
