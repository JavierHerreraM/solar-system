import React from 'react';
import { Route, Switch } from "react-router-dom";
import Canvas from './components/canvas/Canvas'
import NavBar from './components/nav/NavBar'
import Home from './components/home/Home'
import Planets from './components/planets/Planets';
import './modules/config.scss'

function App() {
    return (
        <Canvas>
            <NavBar />
            <Switch>
                <Route path="/planets:planet" component={Planets} />
                <Route path="/" component={Home} />
            </Switch>
        </Canvas>
    );
}

export default App;