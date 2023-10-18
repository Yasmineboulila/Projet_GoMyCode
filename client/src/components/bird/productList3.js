import React from 'react'
import ProductCard from '../productCard'

 function ProductList3({data}) {
  return (
    <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', marginTop:'125px'}}>
      {console.log(data,'list')}
      {data.filter((product) => product.pet === "bird").map((product) => <ProductCard key={product._id} product={product} />)}
    </div>
  )
}
export default ProductList3