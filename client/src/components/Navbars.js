import React ,{ useEffect, useState }  from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {MdPets ,MdAccountCircle} from "react-icons/md";
import {SlBasket} from "react-icons/sl"
import Example from './Form';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {RiAdminFill} from 'react-icons/ri'
import { getCurrent, logout } from '../redux/actions/actions';
import {BsGearWideConnected} from "react-icons/bs"


 function Navbars({handleChange}) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(getCurrent())
  },[])
  const navigate = useNavigate()
  const handleLogout=()=>{
    dispatch(logout(navigate))
  }
 
  
  const user=useSelector(state=>state.userReducer.user)
  console.log(user)
  const products=useSelector((state)=>state.addItems)
  const handleImageClick = () => {
    setIsFormOpen(!isFormOpen)}
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" style={{position:"sticky",top: 0}}>
    <Container fluid>
     <Navbar.Brand href="/">
     <MdPets size="1.4rem"/>{' '}
          Pets Home
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/about">ABOUT</Nav.Link>
          <NavDropdown title="SHOP BY PET" id="navbarScrollingDropdown">
           
            <NavDropdown.Item href="/cat">CAT</NavDropdown.Item>
            <NavDropdown.Item href="/dog">DOG</NavDropdown.Item>
            <NavDropdown.Item href="/bird">BIRD</NavDropdown.Item>
            <NavDropdown.Item href="/fish">FISH</NavDropdown.Item>
           
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search everything about pets"
            className="me-2"
            aria-label="Search"
            onChange = {(event)=>handleChange(event)}
            style={{width:"300px"}}
          />
        </Form>
        <div>
          {user.email?
          <NavLink >
          <BsGearWideConnected size="1.6rem" style={{color:'black'}} onClick={handleLogout} />
          </NavLink>:null}
        </div>
        <div> 
          {user.Role==="admin" ? <NavLink  to={`/admin`}>
          <RiAdminFill size="1.6rem" style={{color:'black'}} />
          </NavLink>:null}
         
        </div>
        <div>
        <MdAccountCircle size="1.8rem" onClick={handleImageClick} style={{color:'black'}}/>
          
          </div>
          <div>
            <NavLink  to={`/shoppingCart`}>
            <SlBasket size="1.8rem" style={{color:"black"}}/>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"14px",width:"14px",borderRadius:"50%",fontWeight:"70D",backgroundColor:"blue",color:"white",fontSize:"14px",marginLeft:"5px",position:"absolute",top:"5px",right:"5px",backgroundColor:'black'}}>
            {products.length}
            </div>
            
            </NavLink>
          
          </div>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  {isFormOpen && <Example/>}
  </>
  )
}
export default Navbars

