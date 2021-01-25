import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import planetsInfo from '../../modules/planetsInfo';
import './planets.scss';

function Planets(props) {
    const planet = props.match.params.planet.substring(1);
    const { name, text, svg, ring = undefined, color } = planetsInfo[planet];

    let [menuOpen, setMenuOpen] = useState(false);

    function handleCLick() {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true);
    }

    return <div className={`planets-page ${name}`}>
        <div className='planets-card'>
            <nav style={{ backgroundColor: color }}>
                <div className='planets-header'>
                    <h2>{name}</h2>
                    <FontAwesomeIcon className={`${menuOpen ? 'rotate-icon ' : ''}planets-menu-icon`} icon={faCaretDown} onClick={handleCLick} />
                </div>
                <ul className={`planets-menu ${menuOpen ? 'open-menu' : ''}`}>
                    <li><a href='/planets:mercury'>Mercury</a></li>
                    <li><a href='/planets:venus'>venus</a></li>
                    <li><a href='/planets:earth'>earth</a></li>
                    <li><a href='/planets:mars'>mars</a></li>
                    <li><a href='/planets:jupiter'>jupiter</a></li>
                    <li><a href='/planets:saturn'>saturn</a></li>
                    <li><a href='/planets:uranus'>uranus</a></li>
                    <li><a href='/planets:neptune'>neptune</a></li>
                </ul>
            </nav>
            <div className='planets-body'>
                {text.map((text, index) => {
                    return <p key={index}>{text}</p>
                })}
            </div>
        </div>
        <div className={`planets-img`}>
            <img src={svg} alt={name} />
            {ring && <img className='planet-ring' src={ring} alt={`${name}'s ring`} />}
        </div>
    </div>
}

export default Planets;