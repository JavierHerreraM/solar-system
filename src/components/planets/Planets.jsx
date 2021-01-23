import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import './planets.scss';

import svgsImport from '../../modules/svgs';
const { jupiter } = svgsImport;

function Planets() {
    let [menuOpen, setMenuOpen] = useState(false);

    function handleCLick() {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true);
    }

    return <div className='planets-page'>

        <div className='planets-card'>
            <nav>
                <div className='planets-header'>
                    <h2>Neptune</h2>
                    <FontAwesomeIcon className={`${menuOpen ? 'rotate-icon ' : ''}planets-menu-icon`} icon={faCaretDown} onClick={handleCLick} />
                </div>
                <ul className={`planets-menu ${menuOpen ? 'open-menu' : ''}`}>
                    <li>Mercury</li>
                    <li>Venus</li>
                    <li>Earth</li>
                    <li>Mars</li>
                    <li>Jupiter</li>
                    <li>Saturn</li>
                    <li>Uranus</li>
                    <li>Neptune</li>
                </ul>
            </nav>
            <div className='planets-body'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci ipsam modi aliquam vel doloremque eum dolorem, corporis ducimus a architecto voluptas numquam, doloribus obcaecati distinctio libero, provident pariatur! Vitae aperiam sed dolorem animi voluptatibus ad perspiciatis nam minus, numquam illo non voluptas labore ipsam aut eveniet dicta natus</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci ipsam modi aliquam vel doloremque eum dolorem, corporis ducimus a architecto voluptas numquam, doloribus obcaecati distinctio libero, provident pariatur! Vitae aperiam sed dolorem animi voluptatibus ad perspiciatis nam minus, numquam illo non voluptas labore ipsam aut eveniet dicta natus</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim adipisci ipsam modi aliquam vel doloremque eum dolorem, corporis ducimus a architecto voluptas numquam, doloribus obcaecati distinctio libero, provident pariatur! Vitae aperiam sed dolorem animi voluptatibus ad perspiciatis nam minus, numquam illo non voluptas labore ipsam aut eveniet dicta natus</p>
                <img src={jupiter} alt="planet" />
            </div>
        </div>
    </div>
}

export default Planets;