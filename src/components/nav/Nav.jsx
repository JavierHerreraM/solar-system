import React, { useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import './nav.scss';

function NavBar() {
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 769px)' });
    let location = useLocation().pathname;
    location = location.split(":")[0];
    let [selectedItem, setSelectedItem] = useState(location);

    function handleClick(e) {
        setSelectedItem(e);
    }

    return (
        <header className='navbar'>
            <h1 className='navbar-title'>Solar System</h1>
            {isBigScreen &&
                <nav className='navbar-options'>
                    <Link to='/' className={`navbar-option ${selectedItem === '/' ? 'active' : ''}`} onClick={() => handleClick("/")}>Home</Link>
                    <Link to='/planets:earth' className={`navbar-option ${selectedItem === '/planets' ? 'active' : ''}`} onClick={() => handleClick('/planets')}>Planets</Link>
                </nav>}
        </header>
    );
}

export default NavBar;