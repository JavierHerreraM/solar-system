import React from 'react';
import './canvas.scss';

function Canvas(props) {
    return (
        <main className='canvas'>{props.children}</main>
    );
}

export default Canvas;