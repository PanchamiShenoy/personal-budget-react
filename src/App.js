import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';




import Menu  from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import About from './About/About';
import LoginPage from './LoginPage/LoginPage';

function App() {
  return (
    <Router>
    <Menu />
    <Hero></Hero>
    <div className = "mainContainer">
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/login' element={<LoginPage/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
    </div>
    <Footer/>
  </Router>
  );
}

export default App;
