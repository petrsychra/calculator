import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import {
    decrement,
    increment,
    selectCount,
  } from './workstationsSlice';
import styles from './Workstations.module.css';

export function Workstations() {
    const numberOfPlatze = useSelector(selectCount);
    const dispatch = useDispatch();
    //const [numberOfPlatze, setIncrementAmount] = useState('1');

    //const numberOfPlatzeValue = Number(incrementAmount) || 0;    
    return (
        <div className="workstations-wrapper">
            <p className="extra-padding">Wie viele Arbeitsplätze (Laptops, Desktop-PCS) sind bei Ihnen im Einsatz?</p>
            <button
                className={styles.button}
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
            -
            </button>
            <input
                className={styles.textbox}
                aria-label="Set increment amount"
                value={numberOfPlatze}
            />            
            <button
                className={styles.button}
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
            +
            </button>             
        </div>
    )
}