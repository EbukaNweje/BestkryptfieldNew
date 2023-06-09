import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import LandingPage from "./Components/LandingPage/LandingPage"
import Footer from './Components/Footer.js/Footer'
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;