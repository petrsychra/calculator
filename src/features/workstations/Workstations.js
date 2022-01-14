import React, { useState } from "react";
import styles from './Workstations.module.css';

export function Workstations(props) { 

    const [workstations, setWorkstations] = useState('');

    const handleWorkstationsChange = (event) => {
        setWorkstations(event.target.value);
    }

    const passWorkstationOnClick = (event) => {
        props.addWorkstations(workstations);
    }

    return (
        <div className="workstations-wrapper">
            <p className="extra-padding">Wie viele Arbeitsplätze (Laptops, Desktop-PCS) sind bei Ihnen 
            im Einsatz?{workstations}</p>
            <input
                type="text"
                className={styles.textbox}
                aria-label="Number of Workstations"
                value={workstations}
                onChange={handleWorkstationsChange}
            />  
            <button
                className={styles.button}
                aria-label="Increment value"
                onClick={passWorkstationOnClick}
            >
                Next
            </button>
        </div>
    )
}