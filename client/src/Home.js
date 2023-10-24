import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect }  from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from '@mui/material';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import {MDBInput} from "mdb-react-ui-kit"
import { useDispatch, useSelector } from 'react-redux';
import { get_product } from './redux/actions/actions';






function Home({search}) {
  const add=useSelector((state)=>state.addItems)
  console.log(add)
  const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(get_product())
        },[dispatch])

        const info = useSelector((state)=>state.productReducer.product)
        console.log(info)
  return (
    <>
    <div>
    <Carousel style={{zIndex:'-1'}}>
      <Carousel.Item>
      <img src="https://scene7.samsclub.com/is/image/samsclub/20230216-pov-dogfood-m?$med$" width="100%" />
      </Carousel.Item>
      <Carousel.Item>
       
          <img src="https://scene7.samsclub.com/is/image/samsclub/20230315-photo-pets-m?$med$" width="100%" />
       
      </Carousel.Item>
     
    </Carousel>
    </div>
    <div style={{"margin-top": "50px"}}>
    <Container>
<Row>

  <Col xs={5} md={3}>
    <Link href='/cat'>
    <Image src="https://img.freepik.com/vecteurs-libre/chat-mignon-tenant-illustration-icone-dessin-anime-poisson-concept-icone-nourriture-animale-isole-style-bande-dessinee-plat_138676-2171.jpg?w=740&t=st=1696436614~exp=1696437214~hmac=cdc59fe0315b26093f217a436c2dd7e619200e8168202bd9261c5b0c9cbca139" width="50%" roundedCircle />
    </Link>
    
  </Col>
   <Col xs={5} md={3}>
   <Link href='/dog'>
    <Image src="https://img.freepik.com/vecteurs-libre/chien-puk-mignon-mangeant-illustration-icone-vectorielle-dessin-anime-hot-dog-concept-icone-nourriture-animale-isole-vecteur-premium-style-dessin-anime-plat_138676-4155.jpg?w=740&t=st=1696436852~exp=1696437452~hmac=146454186dbe4401160394a8d089a2ad5af4b7a842a8a75dda5c0c274304e3e8" width="50%" roundedCircle />
 </Link>
  </Col>
  <Col xs={5} md={3}>
   <Link href='/bird'>
    <Image src="https://img.freepik.com/vecteurs-libre/oiseau-mignon-chapeau-tenant-icone-vecteur-dessin-anime-batte-baseball-concept-icone-sport-animal-isole-vecteur-premium-style-dessin-anime-plat_138676-3636.jpg?w=740&t=st=1696436956~exp=1696437556~hmac=69a59b3e8bb02bcaa3c8286754804232607d09b65ba7efa73a3ae701ded25f18" width="50%" roundedCircle />
  </Link>
  </Col>
   <Col xs={5} md={3}>
   <Link href='/fish'>
    <Image src="https://img.freepik.com/vecteurs-libre/poisson-mignon-nageant-chapeau-lunettes-cartoon-vector-icon-illustration-education-animale-isolee_138676-8653.jpg?w=740&t=st=1696436683~exp=1696437283~hmac=0beb0afce98f9bdf4e3ec9d60966d3d6081d9f1daa95d6d0077ea34a62700a21" width="50%" roundedCircle />
  </Link>
  </Col>
   

</Row>
</Container>
    </div>
    <div>
    {info.filter(e=>e.title.toUpperCase().includes((search.toUpperCase()))).map(e=>
       <Card style={{ width: '20rem' }}>
       <Card.Img variant="top" src={e.image} />
       <Card.Body>
         <Card.Title>{e.title}</Card.Title>
         <Card.Text>
         {e.description}
         </Card.Text>
          <Card.Text>
         {e.prix}<span> TND </span>
         </Card.Text>
       </Card.Body>
      
     </Card>
      )}
    </div>
    
   
     
   


</>
   
  );
}

export default Home;