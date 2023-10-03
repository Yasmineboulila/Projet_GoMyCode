import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
// import { useHistory } from 'react-router-dom';
// import SignIn from './signIn';
function formLoging() {
  // const history = useHistory();

  // const handleButtonClick = () => {
  //   history.push('./signIn');
  // };
  return (
    <Form>
    <div>
    <Form.Label>Don't have an account?</Form.Label> <br/>
     <Button variant="primary" type="submit" 
    //  onClick={handleButtonClick}
    >
       SIGN IN
      </Button> 
      </div> <br/>
      <div>
      <Form.Label> Already have an account?</Form.Label> <br/>
     <Button variant="primary" type="submit">
        SIGN UP
      </Button> 
      </div>
    </Form>
  );
}

export default formLoging;