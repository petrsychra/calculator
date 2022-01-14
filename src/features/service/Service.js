import React, { useState } from "react";
import './Service.module.css';

export function Service(props) { 

    const [service, setService] = useState('');

    const handleServiceOnClick = (event) => {
        setService(event.target.value);
    }

    const passServiceOnClick = (event) => {
        props.addService(service);
    }

    return (
        <div className="workstations-wrapper">
            <p className="extra-padding">Wünschen Sie zusätzlich zu unserer Hotline einen Vor-Ort-Einsatz / Service?</p>
            <div className="labelCtr">
                <label className="radio">
                    <input 
                        type="radio"
                        aria-label="Ohne von Ort Service"
                        value="0"
                        onChange={handleServiceOnClick}
                        name="service"
                    />
                    <div className="emot">
                        <div className="mouth sad"></div>
                    </div>
                </label>
                <label className="radio">
                    <input 
                        type="radio"
                        aria-label="Mit von Ort Service"
                        value="1" 
                        onChange={handleServiceOnClick}
                        name="service"
                    />
                    <div className="emot">
                        <div className="mouth smile"></div>
                    </div>
                </label> 
            </div>          
            <button
                className="button"
                aria-label="Increment value"
                onClick={passServiceOnClick}
            >
                Next
            </button>
        </div>
    )
}