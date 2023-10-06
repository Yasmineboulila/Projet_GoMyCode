import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbars from './components/Navbar';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './components/formLoging';
import Home from './Home';

function App() {
  return (
    <>
    <Navbars/>
   
   <Routes>
    <Route path='/signIn' element={<SignIn/>}></Route>
    
   </Routes>
   <Home/>

</>

  );
}

export default App;
