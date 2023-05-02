import './HotelSrivanna.css';
import React , {useState} from 'react';
import '../App.css'
import { FaChild } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import './Cards.css';
import CartItem from './CartCardItem';
import { IoAccessibility } from "react-icons/io5";
import ReactDatePicker from 'react-datepicker';

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

function HotelSrivanna(){
    const [selectedDayRange, setSelectedDayRange] = useState({
        from: null,
        to: null
    });
   
    return (
       <div>
            <div className="header" style = {{backgroundImage : "url(/images/hotel1.jpg"}} >
                 <h1> Srivanna Hotel</h1>
            </div>
            <li className='fac'>
            <h1>Facility</h1>
            </li>
            <li className='faci'>
            <p><FaCheck/>parking <FaCheck/>air-con <FaCheck/>wi-fi <FaCheck/>fitness <FaCheck/>airport-transfer</p>
            </li>
            <div className='calen'>
            <Calendar
                  value={selectedDayRange}
                 onChange={setSelectedDayRange}
                  shouldHighlightWeekends
             />
             </div>
            <li className='type' >
            <CartItem
              src='images/Deluxe.jpg'
              text='Deluxe'
              label='1,500 THB'
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
              label='2,500 THB'
              path='/hoteldetail'
              />
                </li>
            <li className='detail'>
                <h3><IoAccessibility/> 1-2 adult <FaChild/> 0 kid <FaBed/> 1 KingSize</h3>
            </li>
                
        </div>
        
    )
}

export default HotelSrivanna 