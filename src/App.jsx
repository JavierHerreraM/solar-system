import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Canvas from './components/canvas/Canvas'
import NavBar from './components/nav/NavBar'
import Landing from './components/landing/Landing'
import Planets from './components/planets/Planets';
import './modules/config.scss'

function App() {
    let [planetHover, setPlanetHover] = useState({ show: false, planet: 0 });
    function handlePlanetClick(e) {
        e === undefined
            ? setPlanetHover({ show: false, planet: 0 })
            : setPlanetHover({ show: true, planet: e });
    }


    return (
        <Canvas>
            <NavBar />
            <Switch>
                <Route path="/planets" component={Planets} />
                <Route path="/" render={props => <Landing handlePlanetClick={(e) => { handlePlanetClick(e) }} planetHover={planetHover} />} />
            </Switch>
        </Canvas>
    );
}

export default App;