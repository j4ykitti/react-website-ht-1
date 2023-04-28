import { click } from '@testing-library/user-event/dist/click';
import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { FaHouzz } from 'react-icons/fa';
import { FaOpencart } from 'react-icons/fa';
import { FaHotel } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = ()=> {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else{
            setButton(true);
        }
    };
    useEffect(() => {
        showButton()
    }, []
    )
    window.addEventListener('resize', showButton);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
                HOTTESTT<FaBars/>L <i className='fab fa-typo3' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? <FaBars/> : <FaTimes/>} />
                    
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    <FaHouzz />Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/hotels' className='nav-links' onClick={closeMobileMenu}>
                    <FaHotel />Hotel
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Cart' className='nav-links' onClick={closeMobileMenu}>
                        <FaOpencart />Cart
                    </Link>
                </li>
                {/* <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                    <FaPhoneAlt />Sign-Up
                    </Link>
                </li> */}
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                    <FaPhoneAlt />ContactUS
                    </Link>
                </li>

            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
