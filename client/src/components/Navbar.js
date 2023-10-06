import React ,{ useState }  from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormLoging from './formLoging';
import {MdPets ,MdAccountCircle} from "react-icons/md";
import {SlBasket} from "react-icons/sl"

 function Navbars() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleImageClick = () => {
    setIsFormOpen(!isFormOpen)}
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container fluid>
     <Navbar.Brand href="#home">
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
          <Nav.Link href="#home">HOME</Nav.Link>
          <Nav.Link href="#about">ABOUT</Nav.Link>
          <NavDropdown title="SHOP BY PET" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#dog">DOG</NavDropdown.Item>
            <NavDropdown.Item href="#cat">CAT</NavDropdown.Item>
            <NavDropdown.Item href="#fish">FISH</NavDropdown.Item>
            <NavDropdown.Item href="#bird">BIRD</NavDropdown.Item>
            <NavDropdown.Item href="#others">OTHERS</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search everything about pets"
            className="me-2"
            aria-label="Search"
            style={{width:"300px"}}
          />
        </Form>
        <div>
        <MdAccountCircle size="1.8rem" onClick={handleImageClick}/>
          {isFormOpen && <FormLoging/>}
          </div>
          <div>
          <SlBasket size="1.8rem"/>
          </div>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
export default Navbars

