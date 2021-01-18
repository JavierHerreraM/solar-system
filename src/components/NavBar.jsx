import React from 'react';

function NavBar(props) {
    let { title, options } = props;
    return (
        <div className='navbar'>
            <h1 className='navbar-title'>{title}</h1>
            <div className='navbar-options'>
                {options.map((option, index) => {
                    return <a key={index} href='#' className='navbar-option'>{option}</a>;
                })}
            </div>
        </div>
    );
}

export default NavBar;