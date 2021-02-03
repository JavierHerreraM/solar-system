import React from 'react';
import { Link } from 'react-router-dom';
import './button.scss';

function Button(props) {
    let { buttonLink, buttonText = 'default', name } = props;
    return (
        <>
            <Link to={buttonLink} className={`button card-${name}`}>
                {buttonText}
            </Link>
        </>
    );
}

export default Button;