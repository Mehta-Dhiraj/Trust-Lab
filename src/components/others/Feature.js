import React from 'react';
import { Link } from 'react-router-dom';

function Feature(props) {
    return (
        <div>
            <h1>Feature Page</h1>
            <Link to='/home'>Home</Link>
        </div>
    );
}

export default Feature;