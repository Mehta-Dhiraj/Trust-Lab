import React, { Fragment } from 'react';
import Navbar from './Navbar';
import logo from '../../assets/logo.jpeg';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <Fragment>
            <header>
                <Navbar onShowCart={props.onShowCart}/>
            </header>
            <div className={classes["main-image"]}>
          <img src={logo} alt="A table full of Medicines!" />
        </div>
        </Fragment>
    );
}

export default Header;