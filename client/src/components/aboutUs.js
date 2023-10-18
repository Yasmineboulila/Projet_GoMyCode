import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function AboutUs() {
    const myStyle={
        backgroundImage: 
 "url('https://e0.pxfuel.com/wallpapers/741/237/desktop-wallpaper-dog-lover-pattern-lined-note-paper-template-vector-premium-by-marinemynt-dog-template-cute-background-beautiful-abstract-art-cartoon-dog.jpg')",
        height:'140vh',
        
        fontSize:'50px',
        backgroundSize:'1360px 880px',
        backgroundRepeat: 'no-repeat',
    };
  return (
    <div style={myStyle}>
        <br/>
         <h1 style={{color:'darkblue',fontFamily: 'cursive',marginLeft:'5%',fontSize:'4rem'}}>About Us</h1>
      <h2 style={{textAlign:'start',marginLeft:'10%', width:'50%',fontFamily: 'cursive',marginTop:'50px'}}><span>Pets Home</span> is the leading specialist retailer of pet goods, accessories and aquatics in Tunisia. We are dedicated to bringing joy to the lives of pets and their pet parents every single day.</h2>
       <Container style={{marginTop:'50px', marginLeft:'310px'}}>
      <Row>
       
        
          <Col xs={5} md={3}>
           <Image style={{backgroundColor:'darkblue'}} src="https://www.quality-pet.com//img/cms/icon1.png" roundedCircle />
         </Col>
          <Col xs={5} md={3}>
           <Image style={{backgroundColor:'darkblue'}} src="https://www.quality-pet.com//img/cms/icon2_2.png" roundedCircle />
         </Col>
          <Col xs={5} md={3}>
           <Image style={{backgroundColor:'darkblue'}} src="https://www.quality-pet.com//img/cms/icon3_1.png" roundedCircle />
         </Col>
       
       </Row>
     </Container> 
     <h3 style={{marginLeft:'270px',fontFamily: 'cursive'}}>Advice and orders  --  Quick delivery  --  Delivery throughout Tunisia</h3>
    </div>
    
  )
}
