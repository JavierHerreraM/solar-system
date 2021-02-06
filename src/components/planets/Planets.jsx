import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import planetsInfo from '../../modules/planetsInfo';
import './planets.scss';

function Planets(props) {
    let planet;
    let [menuOpen, setMenuOpen] = useState(false);

    // * If the url has some param it sets planet to that, otherwise planet is set to earth
    if (props.match.params.planet) {
        planet = props.match.params.planet.substring(1);
    } else {
        planet = 'earth';
    }

    const { name, text, characteristics, svg, ring = undefined, color } = planetsInfo[planet];

    function handleCLick() {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true);
    }

    return <>
        <Helmet><title>Planets - Solar System</title></Helmet>
        <section className={`planets-page ${name}`}>
            <div className='planets-card'>
                <nav style={{ backgroundColor: color }}>
                    <header className='planets-header'>
                        <h2>{name}</h2>
                        <FontAwesomeIcon className={`planets-menu-icon ${menuOpen ? 'rotate-icon ' : undefined}`} icon={faCaretDown} onClick={handleCLick} />
                    </header>
                    <ul className={`planets-menu ${menuOpen ? 'open-menu' : undefined}`} onClick={handleCLick}>
                        <li><Link to='/planets:mercury'>mercury</Link></li>
                        <li><Link to='/planets:venus'>venus</Link></li>
                        <li><Link to='/planets:earth'>earth</Link></li>
                        <li><Link to='/planets:mars'>mars</Link></li>
                        <li><Link to='/planets:jupiter'>jupiter</Link></li>
                        <li><Link to='/planets:saturn'>saturn</Link></li>
                        <li><Link to='/planets:uranus'>uranus</Link></li>
                        <li><Link to='/planets:neptune'>neptune</Link></li>
                    </ul>
                </nav>
                <div className='planets-body'>
                    {text.map((text, index) => {
                        return <p key={index}>{text}</p>
                    })}
                    <p><strong>Circumference: </strong>{characteristics[0]}</p>
                    <p><strong>Mass: </strong>{characteristics[1]}</p>
                    <p><strong>Year: </strong>{characteristics[2]}</p>
                    <p><strong>Day: </strong>{characteristics[3]}</p>
                    <p><strong>Temperature: </strong>{characteristics[4]}</p>
                </div>
            </div>
            <div className={`planets-img`}>
                <img src={svg} alt={name} />
                {ring && <img className='planet-ring' src={ring} alt={`${name}'s ring`} />}
            </div>
        </section>
    </>
}

export default Planets;