import * as React from 'react';
import Clock from '../utils/clockx';

import './Header.scss';

export const Header = () => (
    <header className="Header">
        <div>
            <img src="/assets/around-the-globe.png" className="logo" alt="logo" />
        </div>
        <div className="title">
            Places
        </div>
        <div className="clock">
            <Clock />
        </div>
    </header>
);
