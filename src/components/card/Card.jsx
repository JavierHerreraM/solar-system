import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Button from '../button/Button';
import './card.scss';

function Card(props) {
    const { planetInfo, handlePlanetClick } = props;
    const { name, text } = planetInfo.info;

    return <div className={`${planetInfo.show ? 'show-card ' : undefined} card-body`}>
        <header className='card-title'>
            <h3>{name}</h3>
            <FontAwesomeIcon icon={faTimes} onClick={handlePlanetClick} className='card-close-icon' />
        </header>
        <div className='card-text'>{
            <p>{text[0]}</p>
        }</div>
        <Button buttonLink={`/planets:${name}`} buttonText='see more' name={name} />
    </div>
}

export default Card;