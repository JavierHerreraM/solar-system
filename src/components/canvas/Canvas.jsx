import React from 'react';
import './canvas.scss';

function Canvas(props) {
    return (
        <div className='canvas'>{props.children}</div>
    );
}

export default Canvas;