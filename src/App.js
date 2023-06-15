import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import LandingPage from "./Components/LandingPage/LandingPage"
import Footer from './Components/Footer.js/Footer'
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import Markets from './Components/Markets/Markets';
import About from './Components/Company/About';
import Planning from './Components/Planning/Planning';
import Education from './Components/Education/Education';
import Resources from './Components/Resources/Resources';

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/markets" element={<Markets/>}/>
      <Route path="/company" element={<About/>}/>
      <Route path="/planning" element={<Planning/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/resources" element={<Resources/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;