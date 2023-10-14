import Carousel from 'react-bootstrap/Carousel';
import React  from 'react';

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






function Home() {
 
  return (
    <>
    <div>
    <Carousel>
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
    <Link href='#cats'>
    <Image src="https://img.freepik.com/vecteurs-libre/chat-mignon-tenant-illustration-icone-dessin-anime-poisson-concept-icone-nourriture-animale-isole-style-bande-dessinee-plat_138676-2171.jpg?w=740&t=st=1696436614~exp=1696437214~hmac=cdc59fe0315b26093f217a436c2dd7e619200e8168202bd9261c5b0c9cbca139" width="40%" roundedCircle />
    </Link>
    
  </Col>
   <Col xs={5} md={3}>
   <Link href='#dogs'>
    <Image src="https://img.freepik.com/vecteurs-libre/chien-puk-mignon-mangeant-illustration-icone-vectorielle-dessin-anime-hot-dog-concept-icone-nourriture-animale-isole-vecteur-premium-style-dessin-anime-plat_138676-4155.jpg?w=740&t=st=1696436852~exp=1696437452~hmac=146454186dbe4401160394a8d089a2ad5af4b7a842a8a75dda5c0c274304e3e8" width="40%" roundedCircle />
 </Link>
  </Col>
  <Col xs={5} md={3}>
   <Link href='#birds'>
    <Image src="https://img.freepik.com/vecteurs-libre/oiseau-mignon-chapeau-tenant-icone-vecteur-dessin-anime-batte-baseball-concept-icone-sport-animal-isole-vecteur-premium-style-dessin-anime-plat_138676-3636.jpg?w=740&t=st=1696436956~exp=1696437556~hmac=69a59b3e8bb02bcaa3c8286754804232607d09b65ba7efa73a3ae701ded25f18" width="40%" roundedCircle />
  </Link>
  </Col>
   <Col xs={5} md={3}>
   <Link href='#fishs'>
    <Image src="https://img.freepik.com/vecteurs-libre/poisson-mignon-nageant-chapeau-lunettes-cartoon-vector-icon-illustration-education-animale-isolee_138676-8653.jpg?w=740&t=st=1696436683~exp=1696437283~hmac=0beb0afce98f9bdf4e3ec9d60966d3d6081d9f1daa95d6d0077ea34a62700a21" width="40%" roundedCircle />
  </Link>
  </Col>
   

</Row>
</Container>
    </div>
    <div>
        <h1 id='cats'>Cats:</h1>
        <div>
        <h2>Food:</h2>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://all-for-pets.tn/site/images/CHATS/Alimentation/Croquettes/morando/nnnn-morando-13.png" />
        <Card.Body>
          <Card.Title>MIGLIOR GATTO ADULT CAT SALMON 2 KG</Card.Title>
          <Card.Text>
          Croquettes for adult cats with Salmon. Balanced mineral formula
          </Card.Text>
           <Card.Text>
          28.000TND
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.petsonic.fr/18882/nourriture-boite-pour-chats-gourmet-gold-mousse-boeuf-85-gr.jpg" />
        <Card.Body>
          <Card.Title>GOURMET GOLD MOUSSELINE BEEF 85GR</Card.Title>
          <Card.Text>
          the Gold Range of wet cat food, a tasty beef recipe with a fresh and exquisite texture. This box is made up of small portions of beef
          </Card.Text>
          <Card.Text>
          4.800TND
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="https://animalzone.tn/2462-medium_default/felix-tendre-effilees-au-thon-85g.webp" />
        <Card.Body>
          <Card.Title>
          POCHON FELIX SHARED TUNA 85GR</Card.Title>
          
          <Card.Text>
          3.500TND
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="https://mypets.tn/4234/kippy-chat-thon-400-gr.jpg" />
        <Card.Body>
          <Card.Title>KIPPY TUNA PATE 400 G</Card.Title>
         <Card.Text>
          6.000TND
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>
        </div>
       <div>
       <h2>Supplies:</h2>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/1275/1.jpg?8009" />
        <Card.Body>
          <Card.Title>SELF-CLEANING CAT BRUSH WITH BUTTON - BLUE</Card.Title>
        
           <Card.Text>
          28.500TND
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/2996/1.jpg?6965" />
        <Card.Body>
          <Card.Title>CROCI GRIFFIER-CAT-KITEN-27*37*35CM-CROSI
</Card.Title>
          <Card.Text>
          81.000TND
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/2647/1.jpg?4727" />
        <Card.Body>
          <Card.Title>COLLAR WITH BELL FOR CATS - 30 CM PINK
</Card.Title>
         <Card.Text>
          8.000TND
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/5777/1.jpg?9505" />
        <Card.Body>
          <Card.Title>KOKOLA FUSHIA PINK BASKET 64*38CM - CAT</Card.Title>
         <Card.Text>
          98.750TND
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>
       </div>
   
    
    </div>
    <div >
      <h1 id="dogs">Dogs:</h1>
      <div>
        <h2>Food:</h2>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://petstore.tn/wp-content/uploads/2021/03/ylguwerenxh2bg6uuoyi-2.jpg" />
        <Card.Body>
          <Card.Title>ROYAL CANIN DOG MAXI PUPPY 15KG</Card.Title>
          <Card.Text>
          Kibble for dogs Up to 15 months Complete food for puppies of large breeds (adult weight 26 to 44 kg)
          </Card.Text>
           <Card.Text>
        355.000TND
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://animalzone.tn/3330-home_default/brit-premium-by-nature-boeuf-pour-chien-800-gr.webp" />
        <Card.Body>
          <Card.Title>BRIT PREMIUM BEEF AND TRIPES 800G</Card.Title>
          <Card.Text>
          Ideal complement to kibble. Complete food, snack or tasty supplement to kibble for young dogs of all breeds.
          </Card.Text>
           <Card.Text>
          14.000TND
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.zanimax.tn/cdn/shop/products/dr-clauders-snack-filet-de-canard-80gr.jpg?v=1646847633" />
        <Card.Body>
          <Card.Title>
          DC SNACK BREAST FILLET 80GR</Card.Title>
          <Card.Text>
          Duck fillets are a lightly cooked treat. These duck fillets are premium, delicate and healthy pieces that your dog will be sure to love.
          </Card.Text>
           <Card.Text>
         18.600TND
          </Card.Text>
        </Card.Body>
      </Card>
       <Card>
        <Card.Img variant="top" src="https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/92/6796/1.jpg?5878" />
        <Card.Body>
          <Card.Title>KIPPY PATE DOG FISH- RICE- CARROTS 800G
</Card.Title>
        
           <Card.Text>
       13.500TND
          </Card.Text>
        </Card.Body>
      
      </Card>
    </CardGroup>
      </div>
      <div>
        <h2>Supplies:</h2>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/69/0017/1.jpg?7167" />
        <Card.Body>
          <Card.Title>     FELICAN PACK-OF-2:WALKING-TOY-DOG-TENNIS-BALL
</Card.Title>
           <Card.Text>
        25.000TND
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/4677/1.jpg?2171" />
        <Card.Body>
          <Card.Title>FELICE PLASTIC HOUSE 78*57*46CM GREEN - DOGS
</Card.Title>
           <Card.Text>
          337.500 TND
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/93/1036/1.jpg?8227" />
        <Card.Body>
          <Card.Title>FELICAN WATER AND FOOD DISPENSER 3.5L
</Card.Title>
         
           <Card.Text>
         30.000TND
          </Card.Text>
        </Card.Body>
      </Card>
       <Card>
        <Card.Img variant="top" src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/78/5247/1.jpg?4559" />
        <Card.Body>
          <Card.Title>GREEN GROOMING GLOVES - FOR DOG
</Card.Title>
         
           <Card.Text>
       26.000TND
          </Card.Text>
        </Card.Body>
      
      </Card>
    </CardGroup>
      </div>
    </div>
    <div >
      <h1 id="birds">BIRD:</h1>
      <div>
        <h2>Food:</h2>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.zanimax.tn/cdn/shop/products/26010_2.jpg?v=1646847978" />
        <Card.Body>
          <Card.Title>     MANITOBA - CARDUELIDI 800G
</Card.Title>
           <Card.Text>
       24.500TND
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://avianworlddublin.ie/wp-content/uploads/2021/11/manitoba-tropical-big-parrots-2kg.jpg" />
        <Card.Body>
          <Card.Title>MANITOBA - ALL PARROTS 2 KG</Card.Title>
          <Card.Text>
          Manitoba All Parrots is a seed blend for all medium and large parrots. Composition: striped sunflower, kardy, peas, buckwheat, crushed corn, white sorghum, peeled oats, white corn...
          </Card.Text>
           <Card.Text>
          37.500TND
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.ktiniatrikoskosmos.gr/wp-content/uploads/2022/05/MANITOBA-PATE-GOLD-400gr-KTINIATRIKOSKOSMOS.GR_.jpg" />
        <Card.Body>
          <Card.Title>MANITOBA PATE GOLD 400 GR</Card.Title>
         
           <Card.Text>
         7.500TND
          </Card.Text>
        </Card.Body>
      </Card>
       <Card>
        <Card.Img variant="top" src="https://www.zanimax.tn/cdn/shop/files/manitoba-inseparables-calopsittes-1kg.png?v=1683237312" />
        <Card.Body>
          <Card.Title>MANITOBA -INSEPARABLES & COCKATILITIES - 1 KG
</Card.Title>
         
           <Card.Text>
           Mixture of seeds for lovebirds & cockatiels COMPOSITION: Yellow millet, Canary seed, Peeled oats, White sorghum, Red millet, Buckwheat. Paddy Rice. Wheat, Striped Sunflower, Iregi, Kardy...
          </Card.Text>
          <Card.Text>
     11.000TND
          </Card.Text>
        </Card.Body>
      
      </Card>
    </CardGroup>
      </div>
      <div>
        <h2>Supplies:</h2>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.zanimax.tn/cdn/shop/files/NNN.png?v=1693767372" />
        <Card.Body>
          <Card.Title> BIRD LADDER TOY 6 STEPS</Card.Title>
           <Card.Text>
           For the well-being and health of your feathered companion, the ladder is a toy suitable for long hours of exercise and fun.
          </Card.Text>
             <Card.Text>
      10.000TND
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.zanimax.tn/cdn/shop/products/cage-a-oiseaux-ferplast-regina-325-x-49-cm.jpg?v=1646847420" />
        <Card.Body>
          <Card.Title>FERPLAST REGINA BIRD CAGE 32.5 X 49 CM</Card.Title>
          <Card.Text>
          Ferplast cage for canaries and small exotic birds: - Antique finish - Size: 32.5 x 49 cm

          </Card.Text>
           <Card.Text>
          139.000TND
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.zanimax.tn/cdn/shop/products/fontaine-110cc.jpg?v=1642155360" />
        <Card.Body>
          <Card.Title>PLASTIC BIRD DRINK</Card.Title>
         
           <Card.Text>
         3.000TND
          </Card.Text>
        </Card.Body>
      </Card>
       <Card>
        <Card.Img variant="top" src="https://www.zanimax.tn/cdn/shop/files/2_1_313392d1-4430-4cb8-be1e-bf13f596375a.jpg?v=1684096830" />
        <Card.Body>
          <Card.Title>TONIPLUS - BIRD PEST 100 ML
</Card.Title>
          <Card.Text>
     10.000TND
          </Card.Text>
        </Card.Body>
      
      </Card>
    </CardGroup>
      </div>
    </div>
     <div >
      <h1 id="fishs">Fish:</h1>
      <div>
        <h2>Food:</h2>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://petstore.tn/wp-content/uploads/2022/03/1.png" />
        <Card.Body>
          <Card.Title>TETRA DELICA KRILL 100ML</Card.Title>
      
             <Card.Text>
      25.000TND
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://petstore.tn/wp-content/uploads/2022/03/2.png" />
        <Card.Body>
          <Card.Title>TETRA DELICA BLOODWORMS 100ML</Card.Title>
        
           <Card.Text>
          25.000TND
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://petstore.tn/wp-content/uploads/2022/03/4.png" />
        <Card.Body>
          <Card.Title>TETRA MIN FLAXES 12 GR</Card.Title>
         
           <Card.Text>
         4.000TND
          </Card.Text>
        </Card.Body>
      </Card>
       <Card>
        <Card.Img variant="top" src="https://all-for-pets.tn/site/images/POISSONS/Aquarium/Alimentations_Poissons/alime-03.png" />
        <Card.Body>
          <Card.Title>TETRA MIN GOLDFISH 12 GR
</Card.Title>
          <Card.Text>
     4.000TND
          </Card.Text>
        </Card.Body>
      
      </Card>
    </CardGroup>
      </div>
      <div>
        <h2>Supplies:</h2>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://all-for-pets.tn/site/images/POISSONS/Aquarium/Traitement_d_eau_et_entretien/aqua-safe-08.png" />
        <Card.Body>
          <Card.Title>TETRA COMPLETE_SUBSTRATE 5 KG</Card.Title>
      <Card.Text>
      Fertilizing substrate with long-lasting effect rich in nutrients Healthy and luxuriant growth of plants.
          </Card.Text>
             <Card.Text>
       75,000TND
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://all-for-pets.tn/site/images/POISSONS/Aquarium/Traitement_d_eau_et_entretien/test-01.png" />
        <Card.Body>
          <Card.Title> TETRA WATER_TEST COMPLETE WATER ANALYSIS TEST KIT</Card.Title>
        
           <Card.Text>
          120.000TND
          </Card.Text>
           <Card.Text>
           Complete water analysis test kit to precisely determine the 5 main water parameters. Measures the main parameters: pH, total hardness (GH), carbonate hardness (KH), nitrites (NO2) and carbon dioxide (CO2)


          </Card.Text>
          <MDBInput defaultValue={1} min={0} type="number"  />
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://all-for-pets.tn/site/images/POISSONS/Terrarium/Aquaterrarium-Decoration/TL30074_9651.png-Personnalis.png" />
        <Card.Body>
          <Card.Title>TETRA REPTO_AQUA_SET</Card.Title>
         
           <Card.Text>
         450.000TND
          </Card.Text>
          
        </Card.Body>
      </Card>
       <Card>
        <Card.Img variant="top" src="https://petstore.tn/wp-content/uploads/2022/03/Capture-decran-2022-03-10-105040.jpg" />
        <Card.Body>
          <Card.Title>AIR DIFFUSER BUBBLE STONE
</Card.Title>
          <Card.Text>
     3.000TND
          </Card.Text>
          <Button variant="outline-success" style={{fontSize:"20px",borderRadius:"80%"}}>+</Button>{' '}
          <Button variant="outline-danger" style={{fontSize:"20px", borderRadius:"80%"}}>-</Button>{' '}
        </Card.Body>
      
      </Card>
    </CardGroup>
      </div>
     </div>
     
   


</>
   
  );
}

export default Home;