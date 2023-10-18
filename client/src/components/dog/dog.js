import React , { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductList2 from './productList2'
import { get_product } from '../../redux/actions/actions'
export default function Dog() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(get_product())
        },[dispatch])

        const info = useSelector((state)=>state.productReducer.product)
        console.log(info)
  return (
    <div>
      {<ProductList2 data={info} />}
    </div>
  )
}
