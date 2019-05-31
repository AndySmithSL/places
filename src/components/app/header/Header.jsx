import * as React from 'react';
import Clock from '../utils/Clock';

import { ICON_PATH, ICON_LOGO } from '../utils/Global';

import './Header.scss';

export const Header = () => (
    <header className="Header">
        <div>
            <img src={ICON_PATH + ICON_LOGO} className="logo" alt="logo" />
        </div>
        <div className="title">
            Places
        </div>
        <div className="clock">
            <Clock />
        </div>
    </header>
);
