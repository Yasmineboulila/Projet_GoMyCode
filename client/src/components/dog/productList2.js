import React from 'react'
import ProductCard from '../productCard'

export default function ProductList2({data}) {
  return (
    <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', marginTop:'125px'}}>
      {console.log(data,'list')}
      {data.filter((product) => product.pet === "dog").map((product) => <ProductCard key={product._id} product={product} />)}
    </div>
  )
}

