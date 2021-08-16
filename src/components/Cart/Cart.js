import React from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const Cart = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <CartItem />
            <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;