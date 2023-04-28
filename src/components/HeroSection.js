import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'> 
      <video src='video/Vidbeach.mp4' autoPlay loop muted />
      <h1>TIME TO TRAVEL</h1>
      <p>What is your destination?</p>
      <div className="hero-btns">
       
          

      </div>
    </div>
  )
}

export default HeroSection
