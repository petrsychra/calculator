import React, { useState } from "react";
import styles from './Kalkulator.module.css';

export function Kalkulator(props) { 

    const preisBasis = props.workstations * 5;
    const preisPlus = props.workstations * 5;
    const preisPremium = props.workstations * 5;

    return (
        <div className="workstations-wrapper">
            <p className="extra-padding">Based on the data provided:</p>
            <p>Workstations: {props.workstations}</p>
            <p>Servers: {props.servers}</p>
            <p>Vor-Ort-Einsatz / Service: {props.service}</p>
            <p>Name: {props.name}</p>
            <p>EMail: {props.email}</p>
            <p>PLZ: {props.postzahl}</p>

            <p>Preis Basis: {preisBasis}&euro;</p>
            <p>Preis Plus: {preisPlus}&euro;</p>
            <p>Preis Premium: {preisPremium}&euro;</p>
            <p>All: {props.searchHtml}</p>
        </div>
    )
}