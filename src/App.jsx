import React from 'react';


import Canvas from './components/Canvas'
import NavBar from './components/NavBar'
import Landing from './components/Landing'

function App() {
    return (
        <Canvas>
            <NavBar title='Solar System' options={['Home', 'Planets']} />
            <Landing />
        </Canvas>
    );
}

export default App;