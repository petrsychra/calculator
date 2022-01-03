import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import {
    decrement,
    increment,
    selectCount,
  } from '../kalkulator/kalkulatorSlice';
import styles from './Servers.module.css'
export const Servers = (props) => {
    const numberOfServers = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    const incrementValue = Number(incrementAmount) || 0;    
    return (
        <div className="servers-wrapper">
            <p className="extra-padding">Wie viele Server (physikalisch und virtuell) sind bei Ihnen im Einsatz?</p>
            <button
                className={styles.button}
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
            -
            </button>       
            <input
                className={styles.textbox}
                aria-label="Number of Servers"
                value={numberOfServers}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />
            <input
                className={styles.textbox}
                aria-label="Set increment amount"
                onChange={(e) => setIncrementAmount(e.target.value)}
                value={numberOfServers}
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