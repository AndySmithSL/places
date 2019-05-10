import React from 'react';
import logo from './logo.svg';
import './AppReact.css';

function AppReact() {
  return (
    <div className="AppReact">
      <header className="AppReact-header">
        <img src={logo} className="AppReact-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="AppReact-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default AppReact;
