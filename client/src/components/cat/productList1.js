import React from 'react'
import ProductCard from '../productCard'

 function ProductList1({data,search}) {
  return (
    <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', marginTop:'125px'}}>
      {console.log(data,'list')}
      {data.filter((product) => product.pet === "cat").map((product) => <ProductCard key={product._id} product={product} />)}
    </div>
  )
}
export default ProductList1