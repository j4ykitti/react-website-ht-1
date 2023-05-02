import './HotelJay.css';
import React , {useState} from 'react';
import '../App.css'
import { FaChild } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import './Cards.css';
import CartItem from './CartCardItem';
import { IoAccessibility } from "react-icons/io5";


import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

function HotelJay(){
    
    return (
       <div>
            <div className="header" style = {{backgroundImage : "url(/images/hotel3.jpg"}} >
                 <h1> Jay Star</h1>
            </div>
            <li className='fac'>
            <h1>Facility</h1>
            </li>
            <li className='faci'>
            <p><FaCheck/>parking <FaCheck/>air-con <FaCheck/>wi-fi <FaCheck/>fitness <FaCheck/>airport-transfer</p>
            </li>
            <div className='calen'>
            <h1>Check in date</h1>
            <input type="date"  />
            <h1>Check out date</h1>
            <input type="date"  />
             </div>
            <li className='type' >
            <CartItem
              src='images/Deluxe.jpg'
              text='Deluxe'
              label='3,500 THB'
              path='/hoteldetail'
              
              />
              
                </li>
            <li className='detail'>
                
                <h3><IoAccessibility/> 1-2 adult <FaChild/> 0 kid <FaBed/> 1 QueenSize</h3>
            </li>
            

            
            <li className='type'>
            <CartItem
              src='images/Suite.jpg'
              text='Suite'
              label='4,500 THB'
              path='/hoteldetail'
              />
                </li>
            <li className='detail'>
                <h3><IoAccessibility/> 1-2 adult <FaChild/> 0 kid <FaBed/> 1 KingSize</h3>
            </li>
                
        </div>
        
    )
}

export default HotelJay