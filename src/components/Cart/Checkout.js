import React, { useRef, useState } from 'react';
import classes from './Checkout.module.css';


const isEmpty = value => value.trim() === '';
const isSixChars = value => value.trim().length === 6;

function Checkout(props) {
    const [formValidity, setFormValidity] = useState({
        name: true,
        street: true,
        postal: true,
        city: true
    });

    const nameInputRef = useRef();
    const cityInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();

    const confirmHandler = (event) =>{
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const validName = !isEmpty(enteredName);
        const validStreet = !isEmpty(enteredStreet);
        const validCity = !isEmpty(enteredCity);
        const validPostalCode = isSixChars(enteredPostal);

        setFormValidity({
          name: validName,
          street: validStreet,
          postal: validPostalCode,
          city: validCity,
        });

        const formIsValid = validName && validCity && validStreet && validPostalCode;

        if(!formIsValid){
            return;
        }

        props.onConfirm({
          name: enteredName,
          street: enteredStreet,
          postal: enteredPostal,
          city: enteredCity,
        });
    };


    const nameControlClasses = `${classes.control} ${formValidity.name ? '' : classes.invalid}`;
    const streetControlClasses = `${classes.control} ${formValidity.street ? '' : classes.invalid}`;
    const postalControlClasses = `${classes.control} ${formValidity.postal ? '' : classes.invalid}`;
    const cityControlClasses = `${classes.control} ${formValidity.city ? '' : classes.invalid}`;



    return (
      <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nameControlClasses}>
          <label htmlFor="name">Your Name: </label>
          <input type="text" ref={nameInputRef} id="name" />
          {!formValidity.name && <p>Please enter a valid name!</p>}
        </div>
        <div className={streetControlClasses}>
          <label htmlFor="street">Street: </label>
          <input type="text" ref={streetInputRef} id="street" />
          {!formValidity.street && <p>Please enter a valid street!</p>}
        </div>
        <div className={postalControlClasses}>
          <label htmlFor="postal">Postal Code: </label>
          <input type="text" ref={postalInputRef} id="postal" />
          {!formValidity.postal && <p>Please enter a valid postal!</p>}
        </div>
        <div className={cityControlClasses}>
          <label htmlFor="city">City: </label>
          <input type="text" ref={cityInputRef} id="city" />
          {!formValidity.city && <p>Please enter a valid city!</p>}
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button className={classes.submit}>Confirm</button>
        </div>
      </form>
    );
}

export default Checkout;