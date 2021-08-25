import React, { Fragment, useState } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {

  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasitems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
      cartCtx.removeItem(id);
    };
    const cartItemAddHandler = (item) => {
      cartCtx.addItem({...item, amount: 1});
    };

    const orderHandler = () =>{
      setIsCheckout(true);
    };

    const submitOrderHandler = async (userData) => {
      setIsSubmitting(true);
      await fetch("https://medicine-f9e54-default-rtdb.firebaseio.com/orders.json", {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItem: cartCtx.items
        })
      });
      setIsSubmitting(false);
      setDidSubmit(true);
      cartCtx.clearCart();
    };

    const cartItems = (
      <ul className={classes["cart-items"]}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
    );

    const modelActions = (
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasitems && (
          <button className={classes.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    );

    const cartModelData = (
      <Fragment>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        {isCheckout && (
          <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
        )}
        {!isCheckout && modelActions}
      </Fragment>
    ); 

    const isSubmittingModelContent = <p>Sending order data...</p>

    const didSubmitModelContent = <Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Fragment>



    return (
        <Modal onClose={props.onClose}>
           {!isSubmitting && !didSubmit &&  cartModelData}
           {isSubmitting &&  isSubmittingModelContent}
           {!isSubmitting && didSubmit && didSubmitModelContent}
        </Modal>
    );
}

export default Cart;