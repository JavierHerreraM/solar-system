import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

function NavBar() {
    return (
        <header className='navbar'>
            <h1 className='navbar-title'>Solar System</h1>
            <nav className='navbar-options'>
                <Link to='/' className="navbar-option" >Home</Link>
                <Link to='/planets:earth' className="navbar-option" >Planets</Link>
            </nav>
        </header>
    );
}

export default NavBar;