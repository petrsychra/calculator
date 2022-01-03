import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Workstations } from './features/workstations/Workstations';
import { Servers } from './features/servers/Servers';
import './App.css';

function App() {
    const [workstations] = useState([]);
    const ROUTES = {
        WORKSTATIONS: "/workstations",
        SERVERS: "/servers",
    };    
  return (
    <div className="App">
        {/*<header className="App-header"></header>*/}
        <main>
            <h1>Sie wollen wissen, was Ihre monatliche IT kostet?</h1>
            <p className="extra-padding">Ihre IT Kosten sind monatlich kalkulierbar. Welche auf Sie zukommen? Beantworten Sie ein paar Fragen und Sie werden es wissen</p>
            <div className="row">
                <div className="check-area">
	        		<i className="material-icons md-turkis md-30">check</i><span className="check-text">monatliche Kündigung</span>
		        </div>
		        <div className="check-area">
		        	<i className="material-icons md-turkis md-30">check</i><span className="check-text">Zufriedenheitsgarantie</span>
		        </div>			        	
		        <div className="check-area">
		        	<i className="material-icons md-turkis md-30">check</i><span className="check-text">feste Preise</span>		        	
		        </div>
            </div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Workstations />} />
                    <Route path="/workstations" element={<Workstations />} />
                    <Route path="/servers" element={<Servers />} />
                </Routes>
            </Router>
             
            <Counter />
        </main>
      
    </div>
  );
}

export default App;
