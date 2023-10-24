import React, { useEffect, useState } from 'react';
import { Divider } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import './shoppingCart.css'; // Import your CSS stylesheet
import { useDispatch, useSelector } from 'react-redux';
import { delItem } from '../redux/actions/actionCard';

function StepOneValidateOrder({ quantity }) {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  
  

  const products=useSelector((state)=>state.addItems)
  console.log(products)
  

  useEffect(() => {
   
  }, [products,dispatch]);

 

  var total=0
  var totalPrice=0
 

 

  

  

  return (
    <div className="cart-container">
      <h1 className="cart-title">Panier</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th className="produit-column">Product</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) =>{
            
            
            total = total + product.product.prix*product.quantity;
            
          return (
            <tr key={product.product._id}>
              <td>
                <img src={product.product.image} alt={product.product.title} className="product-image" />
              </td>
              <td>{product.product.title}</td>
              <td>
                {product.product.prix} {product.product.currency}
              </td>
              <td>
                {product.quantity}{' '}
              </td>
              <td>
                {product.quantity * product.product.prix} 
              </td>
              <td>
                <button
                  style={{ background: 'none', border: 'none' }}
                  onClick={() => dispatch(delItem(product.product._id))}
                >
                  <AiOutlineDelete style={{ fontSize: '20px', color: 'blue' }} />
                </button>
              </td>
            </tr>
          )})}
        </tbody>
      </table>

      <div className="cart-total">
        Total Price: {total}
      </div>

      <div className="cart-buttons">
      <Button 
      variant="outline-primary"
      onClick={() => navigate('/')}>
        Return
        </Button>{' '}
      <Button 
      variant="outline-primary"
      onClick={() => navigate('/checkout')}>
        Check Out
        </Button>{' '}
        {/* <Button
        style={{backgroundColor:'blue'}}
          className="continue-button"
          onClick={() => navigate('/')}
        >
          Continuez Votre Achat
        </Button> */}
        
      </div>
    </div>
  );
}

export default StepOneValidateOrder;