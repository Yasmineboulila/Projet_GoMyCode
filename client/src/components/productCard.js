import React from 'react'
import Card from 'react-bootstrap/Card';
import {BsFillPatchPlusFill, BsPatchMinusFill} from 'react-icons/bs'
import { useState  } from "react";
import { Input } from '@mui/material';

 function ProductCard({product}) {
  
  const [quantity,setQuantity]=useState(0)
  const add=()=>{
    setQuantity(quantity+1)
  }
  const sub=()=>{
    if(quantity>0)
    {setQuantity(quantity-1)}
    
  }


  return (
    <div>
      <Card  style={{ width: '20rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title> {product.title}</Card.Title>
          <Card.Text>
          {product.description}
          </Card.Text>
           <Card.Text>
           {product.prix}<span> TND </span>
          </Card.Text>
          
          
         <Input
         value={quantity}/>
         <Card.Text style={{justifyContent:'start'}}>
         <BsFillPatchPlusFill style={{ width: '178px', height:'28px',color:'darkblue'}}
         onClick={add}/>
          <BsPatchMinusFill style={{ width: '28px', height:'28px' ,color:'darkblue' }}
           onClick={sub}/>
          </Card.Text>
          
        </Card.Body>
       
      </Card>
    </div>
  )
}
export default ProductCard