import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import JasonData from './TestData.json'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Cards() {
  const [searchTerm, setSearchTerm] = useState("");
  const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className="Search">
        <input type="text" placeholder="Search Hotel" onChange={event => {setSearchTerm(event.target.value)}} />
        {JasonData.filter((val)=>{
          if (searchTerm == "") {
            return val
          } else if (val.Name.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }

        
      }).map((val, key)=> {
          return (
          <div className="black-text" key={key}> 
          <Link to='/Srivanna' >
              <p>
                  {val.Name}
              </p>
              </Link>
          </div>
          );
          })};
    </div>
          

        <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
              <CardItem
              src='images/hotel1.jpg'
              text='Srivanna Hotel'
              label='Start at THB 2,400'
              path='/Srivanna'
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
