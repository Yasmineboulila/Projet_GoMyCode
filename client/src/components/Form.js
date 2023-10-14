import Accordion from 'react-bootstrap/Accordion';

import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from '@mui/material';



function Example() {
  
  return (
    <Accordion defaultActiveKey="0" style={{width:'18%',marginLeft:'82%',zIndex:'1',position:'absolute'}}>
      <Card>
       
        <Accordion.Collapse eventKey="0">
          <Card.Body>
       
    <Form.Label>Don't have an account?</Form.Label> <br/>
    <Button variant="primary"   >
   <a href="/signUp" style={{color:'white',textDecoration:'none'}}>
   SIGN UP
   </a>
      </Button> 
    <br/>
      <Form.Label> Already have an account?</Form.Label> <br/>
     
      <Button variant="primary"   >
   <a href="/signIn" style={{color:'white',textDecoration:'none'}}>
   SIGN IN
   </a>
      </Button> 
       
    
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
export default Example