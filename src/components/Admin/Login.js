import React from 'react';
import { Link } from 'react-router-dom';

function Login(props) {
    return (
        <div>
            <h1>Admin</h1>
            <Link to='/home'>Home</Link>
        </div>
    );
}

export default Login;