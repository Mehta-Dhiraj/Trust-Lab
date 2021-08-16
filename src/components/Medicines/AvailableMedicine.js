import React from 'react';
import Card from '../UI/Card';
import classes from './AvailableMedicine.module.css';
import MedicineItem from './Medicine/MedicineItem';

const DUMMY_MEDICINE = [{
    id: '1',
    name: 'Paracitamol',
    description: 'Uses for Fever control',
    price: 13
},
{
    id: '2',
    name: 'Aspirin',
    description: 'Uses for Fever control',
    price: 7.9
},
{
    id: '3',
    name: 'Avil 50',
    description: 'Uses for Fever control',
    price: 12.33
}];

const AvailableMedicine = (props) => {
    const medicines = DUMMY_MEDICINE.map((medicine) => (
      <MedicineItem
        key={medicine.id}
        name={medicine.name}
        description={medicine.description}
        price={medicine.price}
      />
    ));

    return (
        <section className={classes.meals}>
      <Card><ul>{medicines}</ul></Card>
    </section>
    );
}

export default AvailableMedicine;