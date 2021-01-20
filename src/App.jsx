import React, { useState } from 'react';
import Canvas from './components/Canvas'
import NavBar from './components/NavBar'
import Landing from './components/Landing'
import Card from './components/Card';

function App() {
    let [planetHover, setPlanetHover] = useState({ show: false, planet: 0 });
    function handlePlanetClick(e) {
        let showPlanet = false;
        e === undefined
            ? setPlanetHover({ show: false, planet: 0 })
            : setPlanetHover({ show: true, planet: e });
    }

    const text = [<p key={1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non vehicula diam. Vestibulum vitae ultricies orci. Aenean nisi orci, convallis interdum molestie ac, commodo et nisl. Ut vel augue fringilla, auctor felis ut, accumsan ante. Sed lectus est, mollis at sapien in, dictum volutpat diam.</p>,
    <p key={2}>Mauris lacinia lobortis eros at maximus. In maximus orci eget quam feugiat accumsan. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices arcu vel felis sodales, quis posuere felis ultrices. Duis lacinia leo id sapien vulputate interdum. Vestibulum venenatis, erat nec imperdiet scelerisque, ligula justo fringilla arcu, a cursus nunc lorem quis mi. Praesent iaculis tellus sem, eu rhoncus magna porta id.</p>,
    <p key={3}>Praesent a mollis diam, ac consectetur urna. Morbi tempor nisi eget risus cursus vehicula. Donec maximus nunc non lorem finibus aliquam.</p>];

    return (
        <Canvas>
            <NavBar title='Solar System' options={['Home', 'Planets']} />
            <Landing handlePlanetClick={(e) => { handlePlanetClick(e) }} />
            <Card cardText={text} buttonLink='https://google.com' buttonText='default' handlePlanetClick={() => { handlePlanetClick() }} planetInfo={planetHover} />
        </Canvas>
    );
}

export default App;