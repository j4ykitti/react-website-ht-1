import React from 'react';
import './Cards.css';
import CartItem from './CartCardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/hotel1.jpg'
              text='Srivanna Hotel'
              label='Start at THB 2,400'
              path='/hoteldetail'
            />
            <CardItem
              src='images/hotel2.jpg'
              text='Grand Palace'
              label='Start at THB 7,500'
              path='/hoteldetail'
            />
            <CardItem
              src='images/hotel3.jpg'
              text='Jay Star'
              label='Start at THB 1,500'
              path='/hoteldetail'
            />
          </ul>
          <ul className='cards__items'>
        
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;