import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './test';
import Clock from './DemoComponents/clock';
import Toggle from './DemoComponents/toggle';
import LoginControl from './DemoComponents/loginControl';
import WarningBanner from './DemoComponents/warningBanner';
import NameForm from './DemoComponents/nameForm';
import FlavourForm from './DemoComponents/flavourForm';
import TemperatureCalculator from './DemoComponents/temperatureCalculator';
import WelcomeDialog from './DemoComponents/welcomeDialog';
import Counter from './DemoComponents/Hooks/Counter';

import FilterableProductTable from './ThinkingInReact/filterableProductTable';

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];

function DemoApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <Test />
      <Clock />
      <Toggle />
      <LoginControl />
      <WarningBanner warn={true} />
      <NameForm />
      <FlavourForm />
      <TemperatureCalculator />
      <WelcomeDialog />
      <Counter initialCount={1} />
    </div>
  );
}

export default DemoApp;
