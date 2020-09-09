import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Reloj from './assets/components/Reloj';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hora:
        </p>
        <a
          className="App-link"
          // href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         <Reloj/>
        </a>
      </header>
    </div>
  );
}

export default App;
