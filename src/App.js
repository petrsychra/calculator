import React, { useState } from 'react';
import { Workstations } from './features/workstations/Workstations';
import { Servers } from './features/servers/Servers';
import { Service } from './features/service/Service';
import { Kontakt } from './features/kontakt/Kontakt';
import { Kalkulator } from './features/kalkulator/Kalkulator';
import './App.css';

function App() {
    const [workstations, setWorkstations] = useState([]);
    const [servers, setServers] = useState([]);
    const [service, setService] = useState([]);
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [postzahl, setPostzahl] = useState([]);
    const [searchHtml, setSearchHtml] = useState([]);
    const [displayState, setDisplayState] = useState('workstations');

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const addWorkstations = (workstation) => {
        setWorkstations(workstation);
        setDisplayState('servers')
    }

    const addServers = (server) => {
        setServers(server);
        setDisplayState('service')
    }

    const addService = (service) => {
        setService(service);
        setDisplayState('kontakt')
    }

    const addName = (name) => {
        setName(name);
    }

    const addEmail = (email) => {
        setEmail(email);
    }

    const addPostzahl = (postzahl) => {
        setPostzahl(postzahl);
        triggerSearch(postzahl);
        setDisplayState('kalkulator')
    }
    const resetOnClick = (event) => {
        setWorkstations(0);
        setServers(0);
        setDisplayState('workstations')
    }

    const triggerSearch = (postzahlVal) => {
        fetch("http://localhost/einsnulleinssite/wp-json/standortpreis/search/" + workstations + "/" + servers + "/" + service + "/" + postzahlVal)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            setSearchHtml(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )        
    }

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
            {displayState === 'workstations' && (
                <Workstations addWorkstations={addWorkstations}/>
            )} 
            {displayState === 'servers' && (
                <Servers addServers={addServers}/>
            )} 
            {displayState === 'service' && (
                <Service addService={addService}/>
            )} 
            {displayState === 'kontakt' && (
                <Kontakt addName={addName} addEmail={addEmail} addPostzahl={addPostzahl}/>
            )} 
            {displayState === 'kalkulator' && (
                <Kalkulator workstations={workstations} servers={servers} service={service} name={name} email={email} postzahl={postzahl} searchHtml={searchHtml}/>
            )} 
            <div className='extra-padding'>
                <button
                    className="button"
                    aria-label="Reset Konfigurator"
                    onClick={resetOnClick}
                >
                Reset
            </button>
            </div>
            {/*<Router>
                <Routes>
                    <Route exact path="/" element={<Workstations />} />
                    <Route path="/workstations" element={<Workstations />} />
                    <Route path="/servers" element={<Servers />} />
                </Routes>
            </Router>*/}
        </main>
      
    </div>
  );
}

export default App;
