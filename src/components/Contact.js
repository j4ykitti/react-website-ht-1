import React from 'react';
import '../App.css'
import { Button } from './Button';
import './Contact.css';
import { FaPhoneSquareAlt } from "react-icons/fa";


function ContactUs() {
  return (
    <div className='contact-container'> 
      <video src='video/Vidmoutain.mp4' autoPlay loop muted />
      <h1>Contact Us</h1>
      <p1><FaPhoneSquareAlt/>062-720-2332</p1>
      

      
    </div>
  )
}

export default ContactUs