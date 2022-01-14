import React, { useState } from "react";
import styles from './Servers.module.css'
export const Servers = (props) => {
 
    const [servers, setServers] = useState('');

    const handleServersChange = (event) => {
        setServers(event.target.value);
    }

    const passServersOnClick = (event) => {
        props.addServers(servers);
    }

    return (
        <div className="servers-wrapper">
            <p className="extra-padding">Wie viele Server (physikalisch und virtuell) sind bei Ihnen im Einsatz?</p>
            <input
                className={styles.textbox}
                aria-label="Number of Servers"
                value={servers}
                onChange={handleServersChange}
            />           
            <button
                className={styles.button}
                aria-label="Increment value"
                onClick={passServersOnClick}
            >
            Next
            </button>             
        </div>
    )
}