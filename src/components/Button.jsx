import React from 'react';

function Button(props) {
    let { link, color, text = 'default' } = props;
    return (
        <>
            <a href={link} className="button" style={{ color: color, borderColor: color }}>
                {text}
            </a>
        </>
    );
}

export default Button;