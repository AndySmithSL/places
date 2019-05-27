import React from 'react';

import HomeItemContinents from './HomeItemContinents';
import HomeItemDrives from './HomeItemDrives';
import HomeItemFlags from './HomeItemFlags';
import HomeItemPlaces from './HomeItemPlaces';
import HomeItemPlaceGroups from './HomeItemPlaceGroups';
import HomeItemTerritories from './HomeItemTerritories';
import HomeItemTerritoryTypes from './HomeItemTerritoryTypes';

import './HomeItems.scss';

class HomeItems extends React.Component {
    render() {
        return (
            <div className="HomeItems">
                <HomeItemContinents />
                <HomeItemDrives />
                <HomeItemFlags />
                <HomeItemPlaces />
                <HomeItemPlaceGroups />
                <HomeItemTerritories />
                <HomeItemTerritoryTypes />
            </div>
        );
    }
}

export default HomeItems;
