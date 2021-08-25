import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMedicine.module.css';
import MedicineItem from './Medicine/MedicineItem';

// const DUMMY_MEDICINE = [{
//     id: '1',
//     name: 'Paracitamol',
//     description: 'Uses for Fever control',
//     price: 13
// },
// {
//     id: '2',
//     name: 'Aspirin',
//     description: 'Uses for pain control',
//     price: 7.9
// },
// {
//     id: '3',
//     name: 'Avil 50',
//     description: 'Uses for reaction control',
//     price: 12.33
// },
// {
//     id: '4',
//     name: 'ZinCovid',
//     description: 'Uses for Covid cases',
//     price: 46
// },
// {
//     id: '5',
//     name: 'Avil 50',
//     description: 'Uses for Fever control',
//     price: 12.33
// },
// {
//     id: '6',
//     name: 'Avil 50',
//     description: 'Uses for Fever control',
//     price: 12.33
// },
// {
//     id: '7',
//     name: 'Avil 50',
//     description: 'Uses for Fever control',
//     price: 12.33
// }];

const AvailableMedicine = (props) => {

    const [medicine, setMedicine] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState(false);

    useEffect(() => {
      const fetchMedicine = async () => {
        setIsLoading(true);
        const response = await fetch(
          "https://medicine-f9e54-default-rtdb.firebaseio.com/medicines.json"
        );

        if(!response.ok){
          throw new Error('Something went wrong...');
        }

        const responseData = await response.json();

        const loadedMedicines = [];

        for (const key in responseData) {
          loadedMedicines.push({
            id: key,
            name: responseData[key].name,
            description: responseData[key].description,
            price: responseData[key].price,
          });
        }

        setMedicine(loadedMedicines);
        setIsLoading(false);
      };

        fetchMedicine().catch((error) => {
          setIsLoading(false);
          setHttpError(error.message);
        });

    }, []);



    if(isLoading){
      return (
        <section className={classes.medicineLoading}>
          <p>Loding...</p>
        </section>
      );
    }

    if(httpError){
      return (
        <section className={classes.medicineError}>
          <p>{httpError}</p>
        </section>
      );
    }


    const medicines = medicine.map((medicine) => (
      <MedicineItem
        id={medicine.id}
        key={medicine.id}
        name={medicine.name}
        description={medicine.description}
        price={medicine.price}
      />
    ));

    return (
      <section className={classes.meals}>
        <Card>
          <ul>{medicines}</ul>
        </Card>
      </section>
    );
}

export default AvailableMedicine;