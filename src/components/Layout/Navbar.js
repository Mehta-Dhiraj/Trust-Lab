import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/home">Medico</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/feature">Features</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/product">Pricing</Link>
        </li>
      </ul>
    </div>
    <Link class="nav-link button" to="/login">Sign In</Link>

    <HeaderCartButton onShowCart={props.onShowCart} />
  </div>
</nav>
      </div>
    );
}

export default Navbar;