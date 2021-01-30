import React from 'react';
import { Route, Switch } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import Canvas from './components/canvas/Canvas'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Planets from './components/planets/Planets';
import './modules/config.scss'

function App() {
    const isSmallScreen = useMediaQuery({ query: '(max-device-width: 768px)' });
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 769px)' });

    return (
        <Canvas>
            <Nav />
            {isBigScreen &&
                <Switch>
                    <Route path="/planets:planet" component={Planets} />
                    <Route path="/" component={Home} />
                </Switch>}
            {isSmallScreen &&
                <Switch>
                    <Route path="/planets:planet" component={Planets} />
                    <Route path="/" component={Planets} />
                </Switch>}
        </Canvas>
    );
}

export default App;