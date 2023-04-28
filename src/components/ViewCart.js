import React from 'react';
import '../App.css'
import { Button } from './Button';
import './ViewCart.css';
import './CartCard.css';
import CartItem from './CartCardItem';

function ViewCart() {
  return (
    <div className='cart-container'> 
      <video src='video/Vidmoutain.mp4' autoPlay loop muted />
      <h1>YOUR CART</h1>
      <div className='cards'>
      <h1>Let's travel!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CartItem
              src='images/hotel1.jpg'
              text='Srivanna Hotel'
              label='Deluxe THB1200'
            />
            
          </ul>
          <ul className='cards__items'>
        
        
          </ul>
          
        </div>
      </div>
      <h2>Total Price is 1200 THB</h2>
    </div>

        
      <div className="reserve-button">
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          >
            Reserve Now
          </Button>
          

      </div>
    </div>
  )
}

export default ViewCart 
