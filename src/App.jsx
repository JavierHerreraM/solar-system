import React from 'react';
import { Route, Switch } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import Canvas from './components/canvas/Canvas'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Planets from './components/planets/Planets';
import Footer from './components/footer/Footer';
import './modules/config.scss'

function App() {
    const isSmallScreen = useMediaQuery({ query: '(max-device-width: 768px)' });
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 769px)' });

    return <>
        <Canvas>
            <Nav />
            {isBigScreen &&
                <Switch>
                    <Route path="/planets:planet" component={Planets} />
                    <Route path="/" component={Home} />
                </Switch>}

            {/* On tablet portrait and below renders the planets comp for both paths */}
            {isSmallScreen &&
                <Switch>
                    <Route path="/planets:planet" component={Planets} />
                    <Route path="/" component={Planets} />
                </Switch>}
        </Canvas>
        <Footer />
    </>;
}

export default App;