import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

function NavBar() {
    return (
        <div className='navbar'>
            <h1 className='navbar-title'>Solar System</h1>
            <div className='navbar-options'>
                <Link to='/' className='navbar-option'>Home</Link>
                <Link to='/planets' className='navbar-option'>Planets</Link>
            </div>
        </div>
    );
}

export default NavBar;