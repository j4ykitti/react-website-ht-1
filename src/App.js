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
import Logins from './components/pages/Sign-Up';
import Regis from './components/pages/Regis';
import HotelGrand from './components/HotelGrand';
import HotelJay from './components/HotelJay';

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
        {Logins} />
        <Route path='/register'exact Component=
        {Regis} />
        <Route path='/Grand'exact Component=
        {HotelGrand} />
        <Route path='/Jay'exact Component=
        {HotelJay} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
