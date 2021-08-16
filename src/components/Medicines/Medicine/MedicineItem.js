import React from 'react';
import MedicineForm from './MedicineForm';
import classes from './MedicineItem.module.css';

const MedicineItem = (props) => {

    const price = `$${props.price.toFixed(2)}`;
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MedicineForm />
            </div>
        </li>
    );
}

export default MedicineItem;