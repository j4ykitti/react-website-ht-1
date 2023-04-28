import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import ViewCart from './components/ViewCart';
import ContactUs from './components/Contact';
import Card from './components/pages/Hotel';
import Carded from './components/pages/Hotel';
import HotelSrivanna from './components/pages/Srivanna';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component=
        {Home} /> 
        <Route path='/Cart' exact Component=
        {ViewCart} /> 
        <Route path='/contact' exact Component=
        {ContactUs} />
        <Route path='/hotels' exact Component=
        {Card} />
        <Route path='/Srivanna'exact Component=
        {HotelSrivanna} />
        <Route path='/sign-up'exact Component=
        {HotelSrivanna} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
