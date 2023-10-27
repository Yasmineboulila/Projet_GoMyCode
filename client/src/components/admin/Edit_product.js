import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { update_product } from '../../redux/actions/actions';

function Edit_product({product}) {

    console.log(product)

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
    
    const handleEdit = () => {
        dispatch(update_product(product._id, {title, description, prix, category, image, pet}))
        handleClose()
    }
  return (
    <>
       <Button variant="primary" onClick={handleShow} className='btnmodif'>
        Edit Product
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton style={{backgroundColor:'rgb(95,158,160)'}}>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'rgb(95,158,160)'}} >
        <>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control 
         defaultValue={product?.title}
         name="title"
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
            Cancel
          </Button>
          <Button className='btnsauv' variant="primary" onClick={handleEdit} style={{backgroundColor:"rgb(0,128,128)"}}>
            Save
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit_product