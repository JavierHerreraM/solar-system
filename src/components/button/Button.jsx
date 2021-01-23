import React from 'react';
import './button.scss';

function Button(props) {
    let { buttonLink, buttonText = 'default' } = props;
    return (
        <>
            <a href={buttonLink} className="button">
                {buttonText}
            </a>
        </>
    );
}

export default Button;