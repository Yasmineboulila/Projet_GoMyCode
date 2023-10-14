import 'bootstrap/dist/css/bootstrap.min.css';

import Navbars from './components/Navbars';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/signIn';
import Home from './Home';
import SignUp from './components/signUp';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Navbars/>
   
   <Routes>
   <Route path='/signUp' element={<SignUp/>}/>
    <Route path='/signIn' element={<SignIn/>}/>
    
    <Route path='/' element={ <Home/>}/>
   </Routes>
   <Footer/>
   
  

</>

  );
}

export default App;
