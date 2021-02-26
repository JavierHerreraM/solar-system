import React from 'react';
import PropTypes from 'prop-types';
import './canvas.scss';

function Canvas(props) {
    const { children } = props;
    return <>
        <main className='canvas'>
            <div className="container">
                {children}
            </div>
        </main>
    </>;
};

Canvas.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
};

export default Canvas;