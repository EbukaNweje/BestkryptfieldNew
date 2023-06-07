import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import LandingPage from "./Components/LandingPage/LandingPage"
import Footer from './Components/Footer.js/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;