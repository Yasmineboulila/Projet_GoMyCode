import Carousel from 'react-bootstrap/Carousel';
import React  from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



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
    <Image src="https://img.freepik.com/vecteurs-libre/chat-mignon-tenant-illustration-icone-dessin-anime-poisson-concept-icone-nourriture-animale-isole-style-bande-dessinee-plat_138676-2171.jpg?w=740&t=st=1696436614~exp=1696437214~hmac=cdc59fe0315b26093f217a436c2dd7e619200e8168202bd9261c5b0c9cbca139" width="40%" roundedCircle />
  </Col>
   <Col xs={5} md={3}>
    <Image src="https://img.freepik.com/vecteurs-libre/chien-puk-mignon-mangeant-illustration-icone-vectorielle-dessin-anime-hot-dog-concept-icone-nourriture-animale-isole-vecteur-premium-style-dessin-anime-plat_138676-4155.jpg?w=740&t=st=1696436852~exp=1696437452~hmac=146454186dbe4401160394a8d089a2ad5af4b7a842a8a75dda5c0c274304e3e8" width="40%" roundedCircle />
  </Col>
   <Col xs={5} md={3}>
    <Image src="https://img.freepik.com/vecteurs-libre/poisson-mignon-nageant-chapeau-lunettes-cartoon-vector-icon-illustration-education-animale-isolee_138676-8653.jpg?w=740&t=st=1696436683~exp=1696437283~hmac=0beb0afce98f9bdf4e3ec9d60966d3d6081d9f1daa95d6d0077ea34a62700a21" width="40%" roundedCircle />
  </Col>
   <Col xs={5} md={3}>
    <Image src="https://img.freepik.com/vecteurs-libre/oiseau-mignon-chapeau-tenant-icone-vecteur-dessin-anime-batte-baseball-concept-icone-sport-animal-isole-vecteur-premium-style-dessin-anime-plat_138676-3636.jpg?w=740&t=st=1696436956~exp=1696437556~hmac=69a59b3e8bb02bcaa3c8286754804232607d09b65ba7efa73a3ae701ded25f18" width="40%" roundedCircle />
  </Col>

</Row>
</Container>
    </div>
    <div>
        <h1>Cats:</h1>
        <div>
        <h2>Food:</h2>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://all-for-pets.tn/site/images/CHATS/Alimentation/Croquettes/morando/nnnn-morando-13.png" />
        <Card.Body>
          <Card.Title>MIGLIOR GATTO CHAT ADULTE SAUMON 2 KG</Card.Title>
          <Card.Text>
           Croquettes pour chat adulte au Saumon. Formule équilibrée en minéraux
          </Card.Text>
           <Card.Text>
          28.000TND
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.petsonic.fr/18882/nourriture-boite-pour-chats-gourmet-gold-mousse-boeuf-85-gr.jpg" />
        <Card.Body>
          <Card.Title>GOURMET GOLD MOUSSELINE BOEUF 85GR</Card.Title>
          <Card.Text>
           la Gamme Gold de nourriture humide pour chat, une savoureuse recette boeuf avec une texture souce et exquise. Cette boîte est composée par petites portions de boeuf qui se melangent en formant...
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
POCHON FELIX EFFILÉES THON 85GR</Card.Title>
          
          <Card.Text>
          3.500TND
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="https://mypets.tn/4234/kippy-chat-thon-400-gr.jpg" />
        <Card.Body>
          <Card.Title>KIPPY PATÉ THON 400 G</Card.Title>
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
          <Card.Title>PARTAGEZ CE PRODUIT


BROSSE CHATS AUTONETTOYANTE AVEC BOUTON- BLEU</Card.Title>
        
           <Card.Text>
          28.500TND
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/2996/1.jpg?6965" />
        <Card.Body>
          <Card.Title>CROCI GRIFFOIRE-CHAT-CHATON-27*37*35CM-CROSI</Card.Title>
          <Card.Text>
          81.000TND
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/2647/1.jpg?4727" />
        <Card.Body>
          <Card.Title>COLLIER AVEC CLOCHE POUR CHATS - 30 CM ROSE</Card.Title>
         <Card.Text>
          8.000TND
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/5777/1.jpg?9505" />
        <Card.Body>
          <Card.Title>KOKOLA PANIER ROSE FUSHIA 64*38CM - CHAT</Card.Title>
         <Card.Text>
          98.750TND
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>
       </div>
   
    
    </div>
    <div>
      <h1>Dogs:</h1>
      <div>
        <h2>Food:</h2>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://petstore.tn/wp-content/uploads/2021/03/ylguwerenxh2bg6uuoyi-2.jpg" />
        <Card.Body>
          <Card.Title>ROYAL CANIN CHIEN MAXI PUPPY 15KG</Card.Title>
          <Card.Text>
      Croquette pour chiens Jusqu'à à 15 mois Aliment complet pour chiots de grandes races (poids adulte de 26 à 44 kg)
          </Card.Text>
           <Card.Text>
        355.000DTN
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://animalzone.tn/3330-home_default/brit-premium-by-nature-boeuf-pour-chien-800-gr.webp" />
        <Card.Body>
          <Card.Title>BRIT PREMIUM BOEUF ET TRIPES 800G</Card.Title>
          <Card.Text>
           Complément idéal de croquettes. Aliment complet, collation ou complément savoureux de croquettes pour jeunes chiens de toutes races.
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
          Les filets de canard est une friandise légèrement cuite. Ces aiguillettes de canard sont des morceaux de premier  choix, délicats et sains , que votre chien ne manquera pas d'adorer.
          </Card.Text>
           <Card.Text>
         18.600TND
          </Card.Text>
        </Card.Body>
      </Card>
       <Card>
        <Card.Img variant="top" src="https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/92/6796/1.jpg?5878" />
        <Card.Body>
          <Card.Title>KIPPY PATE CHIEN POISSON- RIZ- CAROTTES 800G
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
          <Card.Title>      FELICAN PACK-DE-2:JOUET-A-MARCHER-CHIEN-BALLE-TENNIS
</Card.Title>
           <Card.Text>
        25.000TND
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/57/4677/1.jpg?2171" />
        <Card.Body>
          <Card.Title>FELICE NICHE EN PLASTIQUE 78*57*46CM VERT - CHIENS</Card.Title>
           <Card.Text>
          337.50 TND
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/93/1036/1.jpg?8227" />
        <Card.Body>
          <Card.Title>FELICAN DISTRIBUTEUR D'EAU ET DE NOURRITURE 3.5L</Card.Title>
         
           <Card.Text>
         30.000TND
          </Card.Text>
        </Card.Body>
      </Card>
       <Card>
        <Card.Img variant="top" src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/78/5247/1.jpg?4559" />
        <Card.Body>
          <Card.Title>GANTS DE TOILETTAGE VERT - POUR CHIEN</Card.Title>
         
           <Card.Text>
       26.000TND
          </Card.Text>
        </Card.Body>
      
      </Card>
    </CardGroup>
      </div>
    </div>
    <div>
      <h1>Oiseaux:</h1>
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
          <Card.Title>MANITOBA - ALL PARROTS 2 kg</Card.Title>
          <Card.Text>
          Manitoba All Parrots est un mélange de graines pour tous les perroquets de moyenne et grande taille. Composition: tournesol rayé, kardy, pois, sarrasin, mais concassé, sorgho blanc, avoine pelèe, mais blanc,...
          </Card.Text>
           <Card.Text>
          37.500TND
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.ktiniatrikoskosmos.gr/wp-content/uploads/2022/05/MANITOBA-PATE-GOLD-400gr-KTINIATRIKOSKOSMOS.GR_.jpg" />
        <Card.Body>
          <Card.Title>MANITOBA PATÉ GOLD 400 GR</Card.Title>
         
           <Card.Text>
         7.500TND
          </Card.Text>
        </Card.Body>
      </Card>
       <Card>
        <Card.Img variant="top" src="https://www.zanimax.tn/cdn/shop/files/manitoba-inseparables-calopsittes-1kg.png?v=1683237312" />
        <Card.Body>
          <Card.Title>MANITOBA -INSEPARABLES & CALOPSITTES - 1 KG
</Card.Title>
         
           <Card.Text>
       Mélange de graines pour les inséparables & calopsittes COMPOSITION : Millet jaune, Alpiste, Avoine pelèe, Sorgho blanc, Millet rouge, Sarrasin. Paddy Riz. Blé, Tournesol Rayé, Iregi, Kardy. 
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
          <Card.Title> JOUET ECHELLE OISEAUX 6 MARCHES</Card.Title>
           <Card.Text>
       Pour le bien-être et la santé de votre compagnon à plumes, l'échelle est un jouet adapté pour des longues heures d'exercice et d'amusement.
          </Card.Text>
             <Card.Text>
      10.000TND
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.zanimax.tn/cdn/shop/products/cage-a-oiseaux-ferplast-regina-325-x-49-cm.jpg?v=1646847420" />
        <Card.Body>
          <Card.Title>CAGE A OISEAUX FERPLAST REGINA 32,5 X 49 CM</Card.Title>
          <Card.Text>
          Cage Ferplast pour canaris et petits oiseaux exotiques: - Finition antique - Dimension : 32,5 x 49 cm

          </Card.Text>
           <Card.Text>
          139.000TND
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.zanimax.tn/cdn/shop/products/fontaine-110cc.jpg?v=1642155360" />
        <Card.Body>
          <Card.Title>ABREUVOIR POUR OISEAUX EN PLASTIQUE</Card.Title>
         
           <Card.Text>
         3.000TND
          </Card.Text>
        </Card.Body>
      </Card>
       <Card>
        <Card.Img variant="top" src="https://www.zanimax.tn/cdn/shop/files/2_1_313392d1-4430-4cb8-be1e-bf13f596375a.jpg?v=1684096830" />
        <Card.Body>
          <Card.Title>TONIPLUS - ANTIPARASITE OISEAUX 100 ML
</Card.Title>
          <Card.Text>
     10.000TND
          </Card.Text>
        </Card.Body>
      
      </Card>
    </CardGroup>
      </div>
    </div>
     <div>
      <h1>Fish:</h1>
      <div>
        <h2>Food:</h2>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://petstore.tn/wp-content/uploads/2022/03/1.png" />
        <Card.Body>
          <Card.Title>Tetra Delica Krill 100ml</Card.Title>
      
             <Card.Text>
      25.000TND
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://petstore.tn/wp-content/uploads/2022/03/2.png" />
        <Card.Body>
          <Card.Title>Tetra Delica Bloodworms 100ml</Card.Title>
        
           <Card.Text>
          25.000TND
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://petstore.tn/wp-content/uploads/2022/03/4.png" />
        <Card.Body>
          <Card.Title>Tetra Min Flaxes 12 gr</Card.Title>
         
           <Card.Text>
         4.000TND
          </Card.Text>
        </Card.Body>
      </Card>
       <Card>
        <Card.Img variant="top" src="https://all-for-pets.tn/site/images/POISSONS/Aquarium/Alimentations_Poissons/alime-03.png" />
        <Card.Body>
          <Card.Title>Tetra Min Goldfish 12 gr
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
          <Card.Title>Tetra CompleteSubstrate 5 kg</Card.Title>
      <Card.Text>
       Substrat fertilisant à effet longue durée riche en nutriments Croissance saine et luxuriante des plantes.
          </Card.Text>
             <Card.Text>
       75,000TND
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://all-for-pets.tn/site/images/POISSONS/Aquarium/Traitement_d_eau_et_entretien/test-01.png" />
        <Card.Body>
          <Card.Title> Tetra WaterTest Kit complet de tests d'analyse de l'eau</Card.Title>
        
           <Card.Text>
          120.000TND
          </Card.Text>
           <Card.Text>
         Kit complet de tests d'analyse de l'eau permettant de déterminer précisément les 5 principaux paramètres de l'eau. Mesure les principaux paramètres: pH, dureté totale (GH), dureté carbonatée (KH), nitrites (NO2) et gaz carbonique (CO2)


          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://all-for-pets.tn/site/images/POISSONS/Terrarium/Aquaterrarium-Decoration/TL30074_9651.png-Personnalis.png" />
        <Card.Body>
          <Card.Title>Tetra ReptoAquaSet</Card.Title>
         
           <Card.Text>
         450.000TND
          </Card.Text>
        </Card.Body>
      </Card>
       <Card>
        <Card.Img variant="top" src="https://petstore.tn/wp-content/uploads/2022/03/Capture-decran-2022-03-10-105040.jpg" />
        <Card.Body>
          <Card.Title>Air Diffuser Bubble Stone
</Card.Title>
          <Card.Text>
     3.000TND
          </Card.Text>
        </Card.Body>
      
      </Card>
    </CardGroup>
      </div>
     </div>
   


</>
   
  );
}

export default Home;