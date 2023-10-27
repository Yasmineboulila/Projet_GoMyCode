import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delete_product, get_product } from '../../redux/actions/actions'
import Edit_product from './Edit_product';
import Add_product from './Add_product';

import { Button, Card } from 'react-bootstrap';


function Admin() {

  const dispatch = useDispatch()


  useEffect(()=>{
      dispatch(get_product())
      },[dispatch])


      const info = useSelector((state)=>state.productReducer.product)

  return (
    <>
    <div style={{zIndex:'-1'}}> 
        <Add_product product={info} />
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:'wrap'}}>
    {info.map((product) =>
    <Card style={{ width: '18rem' ,marginTop:'10px'}}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
          </Card.Text>
          <Card.Text>
          {product.prix}
          </Card.Text>
          <Card.Text> {product.category}</Card.Text>
         
          <Card.Text>{product.pet}</Card.Text>
          
        
        <Button onClick={()=> dispatch(delete_product(product._id))} className='btndlt'style={{marginRight:"5px"}}>Delete</Button>
        
        <Edit_product product={product}/>
      </Card.Body>
    </Card>
  
   
    
    )}
     </div>   
   
  
  
</div>

    </>
  

 
      
  )
}

export default Admin