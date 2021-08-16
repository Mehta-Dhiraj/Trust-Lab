import React, { Fragment } from 'react';
import AvailableMedicine from './AvailableMedicine';
import MedicineSummary from './MedicineSummary';

function Medicine(props) {
    return (
        <Fragment>
            <MedicineSummary />
            <AvailableMedicine />
        </Fragment>
    );
}

export default Medicine;