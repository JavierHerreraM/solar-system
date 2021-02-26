import React from 'react';
import { Route, Switch } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import Canvas from './components/canvas/Canvas'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Planets from './components/planets/Planets';
import Footer from './components/footer/Footer';
import Page404 from './components/page-404/Page404';
import './modules/config.scss'

function App() {
    const isBigScreen = useMediaQuery({ query: '(min-device-width: 769px)' });

    return <>
        <Canvas>
            <Nav />
            {/* On tablet portrait and below renders the planets comp for both paths */}
            {
                <Switch>
                    <Route path="/planets:planet" component={Planets} />
                    <Route exact path="/" component={isBigScreen ? Home : Planets} />
                    <Route path="*" component={Page404} />
                </Switch>
            }
        </Canvas>
        <Footer />
    </>;
};

export default App;