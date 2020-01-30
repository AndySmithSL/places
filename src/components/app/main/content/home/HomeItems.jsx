import React from 'react';

import HomeItemContinents from './HomeItemContinents';
import HomeItemDrives from './HomeItemDrives';
import HomeItemFlags from './HomeItemFlags';
import HomeItemPlaces from './HomeItemPlaces';
import HomeItemPlaceGroups from './HomeItemPlaceGroups';
import HomeItemRoutes from './HomeItemRoutes';
import HomeItemTerritories from './HomeItemTerritories';
import HomeItemTerritoryTypes from './HomeItemTerritoryTypes';

import './HomeItems.scss';

export const HomeItems = () => {
    return (
        <div className="HomeItems">
            <HomeItemContinents />
            <HomeItemDrives />
            <HomeItemFlags />
            <HomeItemPlaces />
            <HomeItemPlaceGroups />
            <HomeItemRoutes />
            <HomeItemTerritories />
            <HomeItemTerritoryTypes />
        </div>
    );
}
