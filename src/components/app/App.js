import React from 'react';
import { Header } from './header/header';
import Main from './main/main';
import { Footer } from './footer/footer';
import './App.scss';

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
