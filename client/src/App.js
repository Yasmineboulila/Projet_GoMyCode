import 'bootstrap/dist/css/bootstrap.min.css';

import Navbars from './components/Navbars';
import React,{useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/signIn';
import Home from './Home';
import SignUp from './components/signUp';
import Footer from './components/Footer';
import Cat from './components/cat/cat';

import ShoppingCart from './components/shoppingCart';
import Dog from './components/dog/dog';
import Bird from './components/bird/bird';
import Fish from './components/fish/fish';
import AboutUs from './components/aboutUs';
import Cancel from './components/cancel';
import Success from './components/succes';
import Admin from './components/admin/Admin';
import AlertError from './components/Alert';


function App() {
  const [search, setSearch] = useState("")
  // const data=[
  //   // catFood
  //     {title:"MIGLIOR GATTO ADULT CAT SALMON 2 KG",image:"https://all-for-pets.tn/site/images/CHATS/Alimentation/Croquettes/morando/nnnn-morando-13.png",description:"Croquettes for adult cats with Salmon. Balanced mineral formula",prix:28.000},
  //     {title:"GOURMET GOLD MOUSSELINE BEEF 85GR",image:"https://www.petsonic.fr/18882/nourriture-boite-pour-chats-gourmet-gold-mousse-boeuf-85-gr.jpg",description:"the Gold Range of wet cat food, a tasty beef recipe with a fresh and exquisite texture. This box is made up of small portions of beef",prix:4.800},
  //     {title:"POCHON FELIX SHARED TUNA 85GR",image:"https://animalzone.tn/2462-medium_default/felix-tendre-effilees-au-thon-85g.webp",description:"",prix:3.500},
  //     {title:"KIPPY TUNA PATE 400 G",image:"https://mypets.tn/4234/kippy-chat-thon-400-gr.jpg",description:"",prix:6.000},
  //     // catSupplies
  //     {title:"SELF-CLEANING CAT BRUSH WITH BUTTON - BLUE",image:"https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/94/1275/1.jpg?8009",description:"",prix:28.500},
  //     {title:"CROCI GRIFFIER-CAT-KITEN-27*37*35CM-CROSI",image:"https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/2996/1.jpg?6965",description:"",prix:81.000},
  //     {title:"COLLAR WITH BELL FOR CATS - 30 CM PINK",image:"https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/60/2647/1.jpg?4727",description:"",prix:8.000},
  //     {title:"KOKOLA FUSHIA PINK BASKET 64*38CM - CAT",image:"https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/87/5777/1.jpg?9505",description:"",prix:98.750},
  //     // dogFood
  //     {title:"ROYAL CANIN DOG MAXI PUPPY 15KG",image:"https://petstore.tn/wp-content/uploads/2021/03/ylguwerenxh2bg6uuoyi-2.jpg",description:"Kibble for dogs Up to 15 months Complete food for puppies of large breeds (adult weight 26 to 44 kg)",prix:355.000},
  //     {title:"BRIT PREMIUM BEEF AND TRIPES 800G",image:"https://animalzone.tn/3330-home_default/brit-premium-by-nature-boeuf-pour-chien-800-gr.webp",description:"Ideal complement to kibble. Complete food, snack or tasty supplement to kibble for young dogs of all breeds.",prix:14.000},
  //     {title:"DC SNACK BREAST FILLET 80GR",image:"https://www.zanimax.tn/cdn/shop/products/dr-clauders-snack-filet-de-canard-80gr.jpg?v=1646847633",description:"Duck fillets are a lightly cooked treat. These duck fillets are premium, delicate and healthy pieces that your dog will be sure to love.",prix:18.600},
  //     {title:"KIPPY PATE DOG FISH- RICE- CARROTS 800G",image:"https://tn.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/92/6796/1.jpg?5878",description:"",prix:13.500},
      // dogSupplies


  // ]
  const handleChange=(e)=> {
        setSearch(e.target.value) }
        
  return (
    <>
    <Navbars handleChange={handleChange}/>
    <AlertError/>
   <Routes>
   <Route path="/cat" element={<Cat/>}/>
   <Route path="/dog" element={<Dog/>}/>
   <Route path="/bird" element={<Bird/>}/>
   <Route path="/fish" element={<Fish/>}/>
   {/* <Route path="/" element={<ProductList  search={search}/>} /> */}
    <Route path='/' element={ <Home search={search}/>}/>
    <Route path='/shoppingCart' element={ <ShoppingCart/>}/>
    <Route path='/signUp' element={<SignUp/>}/>
    <Route path='/signIn' element={<SignIn/>}/>
    <Route path='/about' element={<AboutUs/>}/>
    {/* <Route path='/checkout' element={<StripePayment/>}/> */}
    <Route path="/success" element={<Success/>} /> 
    <Route path='/admin' element={<Admin />} />
    <Route path="/cancel" element={<Cancel/>} /> 

    {/* <Route path='/shoppingCart' element={<ShoppingCart/>}/> */}
   </Routes>
   <Footer/>
   
  

</>

  );
}

export default App;
