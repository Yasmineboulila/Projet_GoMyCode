import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { add_product } from '../../redux/actions/actions';

function Add_product({product}) {

    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [title,setTitle]=useState(product.title)
    const [description,setDescription]=useState(product.description)
    const [prix,setPrix]=useState(product.prix)
    const [category,setCategory]=useState(product.category)
    const [image,setImage]=useState(product.image)
    const [pet,setPet]=useState(product.pet)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = () => {
        dispatch(add_product({title, description, prix, category, image, pet}))
        handleClose()
    }

  return (
    <>
    <div style={{display:'flex', justifyContent:'space-around', width:'450px', marginTop:'25px',
      marginLeft:'95px', marginBottom:'25px'}}>
    <Button variant="primary" onClick={handleShow} className='btnajout' style={{marginLeft:'160%',width:'550px'}}>
     Add Product
   </Button>{' '}
    </div>

   <Modal show={show} onHide={handleClose}>
     <Modal.Header closeButton style={{backgroundColor:'rgb(95,158,160)'}}>
       <Modal.Title>New Product</Modal.Title>
     </Modal.Header>
     <Modal.Body  style={{backgroundColor:'rgb(95,158,160)'}}>
     <>
   <Form.Group className="mb-3">
     <Form.Label>Title</Form.Label>
     <Form.Control 
      defaultValue={product?.title}
      type="text"
      onChange={(e)=>setTitle(e.target.value)} />
   </Form.Group>
   <Form.Group className="mb-3">
     <Form.Label>Description</Form.Label>
     <Form.Control 
     defaultValue={product?.description}
     type="text"
     onChange={(e)=>setDescription(e.target.value)} />
   </Form.Group>
   <Form.Group className="mb-3">
     <Form.Label>Price</Form.Label>
     <Form.Control 
     defaultValue={product?.prix}
     type="number"
     onChange={(e)=>setPrix(e.target.value)}  />
   </Form.Group>
   <Form.Group className="mb-3">
     <Form.Label>Image</Form.Label>
     <Form.Control 
     defaultValue={product?.image}
     type="text"
     onChange={(e)=>setImage(e.target.value)} />
   </Form.Group>
   <Form.Group className="mb-3">
     <Form.Label>Category</Form.Label>
     <Form.Control 
     defaultValue={product?.category}
     type="text"
     onChange={(e)=>setCategory(e.target.value)}  />
   </Form.Group>
   <Form.Group className="mb-3">
     <Form.Label>Pet</Form.Label>
     <Form.Control 
     defaultValue={product?.pet}
     type="text"
     onChange={(e)=>setPet(e.target.value)}  />
   </Form.Group>       
 </>
     </Modal.Body>
     <Modal.Footer style={{backgroundColor:'rgb(79, 126, 255)'}}>
       <Button className='btnaanul' variant="secondary" onClick={handleClose} style={{marginRight:'330px',backgroundColor:"rgb(0,128,128)"}}>
         Close
       </Button>
       <Button className='btnajout' variant="primary" onClick={handleSubmit} style={{backgroundColor:"rgb(0,128,128)"}}>
         Add 
       </Button>
     </Modal.Footer>
   </Modal>
 </>
  )
}

export default Add_product