App.js

import React, { useState } from 'react';
import logo from './assets/logo.svg';
import './styles/App.css';
import Consultar from './components/consultar';
import Ingresar from './components/Ingresar';

function App() {
    const [dataUpdated, setDataUpdated] = useState(false);

    const handleDataUpdate = () => {
        setDataUpdated(true);
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Editar el archivo <code>src/App.js</code> y guardar para recargar.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <h1>Ejemplo con React</h1>
            <div>
                <Ingresar onDataUpdate={handleDataUpdate} />
            </div>
            <div>
                <Consultar dataUpdated={dataUpdated} />
            </div>
        </div>
    );
}

export default App;
