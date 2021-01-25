import React from 'react';
import './button.scss';

function Button(props) {
    let { buttonLink, buttonText = 'default', name } = props;
    return (
        <>
            <a href={buttonLink} className={`button card-${name}`}>
                {buttonText}
            </a>
        </>
    );
}

export default Button;