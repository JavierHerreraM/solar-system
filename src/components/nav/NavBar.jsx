import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import './nav.scss';

function NavBar() {

    let location = useLocation().pathname;
    location = location.split(":")[0];
    console.log(typeof (location));
    let [selectedItem, setSelectedItem] = useState(location);

    function handleClick(e) {
        setSelectedItem(e);
    }

    return (
        <div className='navbar'>
            <h1 className='navbar-title'>Solar System</h1>
            <div className='navbar-options'>
                <a href="/" className={`navbar-option ${selectedItem === '/' ? 'active' : ''}`} onClick={() => handleClick("/")}>Home</a>
                <a href="/planets:earth" className={`navbar-option ${selectedItem === '/planets' ? 'active' : ''}`} onClick={() => handleClick('/planets')}>Planets</a>
            </div>
        </div>
    );
}

export default NavBar;