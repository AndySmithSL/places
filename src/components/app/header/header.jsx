import * as React from 'react';
import Clock from '../utils/clock';
import './header.scss';

export const Header = () => (
    <header className="header">
        <div>
            <img src="/assets/around-the-globe.png" className="header-logo" alt="logo" />
        </div>
        <div className="header-title">
            Places
        </div>
        <div className="header-clock">
            <Clock />
        </div>
    </header>
);
