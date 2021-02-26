import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './button.scss';

function Button(props) {
    // * Depending on name defines different styles accordingly to each planet
    const { buttonLink, buttonText = 'default', name } = props;
    return <>
        <Link to={buttonLink} className={`button card-${name}`}>
            {buttonText}
        </Link>
    </>;
};

Button.propTypes = {
    buttonLink: PropTypes.string,
    buttonText: PropTypes.node,
    name: PropTypes.string
};

export default Button;