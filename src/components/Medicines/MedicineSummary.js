import React from 'react';
import classes from './MedicineSummary.module.css';

function MedicineSummary(props) {
    return (
      <section className={classes.summary}>
        <h2>Recommended Lab Tests For You</h2>
        <p>Hba1C (Glycosylated hemoglobin)</p>
        <p>
          Covid Antybody Test
        </p>
        <p>
          HIV
        </p>
      </section>
    );
}

export default MedicineSummary;