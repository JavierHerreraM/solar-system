import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './nav.scss';

function NavBar() {
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 769px)' });

    return (
        <header className='navbar'>
            <h1 className='navbar-title'>Solar System</h1>
            {/* If the screen is tablet portrait or below it don't show the options */}
            {isBigScreen &&
                <nav className='navbar-options'>
                    <Link to='/' className="navbar-option" >Home</Link>
                    <Link to='/planets:earth' className="navbar-option" >Planets</Link>
                </nav>}
        </header>
    );
}

export default NavBar;