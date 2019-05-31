import React from 'react';

import { Loading } from '../../../utils/Loading';
import { DashboardHeader } from '../common/DashboardHeader';

//import '../Content.scss';
import { PlaceDetails } from './PlaceDetails';
import MapContainer from './MapContainer';
import { PlaceMap } from './PlaceMap';

import './DashboardPlace.scss';

export const DashboardPlace = props => {

    const { item } = props;

    if(!item) {
        return <Loading />;
    }

    return (
        <div className="DashboardPlace">
            <DashboardHeader title={item.name} icon={props.icon} subtitle={item.code} />
            <div className="DashboardPlaceRow" >
                <div className="DashboardPlaceLeftPane">
                    <PlaceDetails item={item} label='Details' icon='../assets/info.png' />
                </div>
                <div className="DashboardPlaceRightPane">
                    <PlaceMap place={props.item} label='Map' icon='../assets/map.png' />
                </div>
            </div>
        </div>
    );
}
