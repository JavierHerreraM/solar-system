import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from '../button/Button';
import './card.scss';

function Card(props) {
    const { cardText, buttonLink, buttonText, planetInfo, handlePlanetClick } = props;
    return <div className={`${planetInfo.show ? 'show-card ' : ''}card-body`}>
        <div className='card-title'>
            <h3>{planetInfo.planet}</h3>
            <FontAwesomeIcon icon={faTimes} onClick={handlePlanetClick} />
        </div>
        <div className='card-text'>{cardText}</div>
        <Button buttonLink={buttonLink} buttonText={buttonText} />
    </div>
}

export default Card;