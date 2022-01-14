import React, { useState } from "react";
import styles from './Kontakt.module.css';

export function Kontakt(props) { 

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [postzahl, setPostzahl] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePostzahlChange = (event) => {
        setPostzahl(event.target.value);
    }

    const passKontaktOnClick = (event) => {
        props.addName(name);
        props.addEmail(email);
        props.addPostzahl(postzahl);
    }

    return (
        <div className="workstations-wrapper">
            <p className="extra-padding">Wie viele Arbeitsplätze (Laptops, Desktop-PCS) sind bei Ihnen 
            im Einsatz?</p>
            <div>
                <input
                    type="text"
                    className={styles.textbox}
                    aria-label="Name"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                <input
                    type="text"
                    className={styles.textbox}
                    aria-label="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>
            <div>
                <input
                    type="text"
                    className={styles.textbox}
                    aria-label="Postzahl"
                    value={postzahl}
                    onChange={handlePostzahlChange}
                />
            </div>                        
            <button
                className={styles.button}
                aria-label="To Price"
                onClick={passKontaktOnClick}
            >
                Next
            </button>
        </div>
    )
}