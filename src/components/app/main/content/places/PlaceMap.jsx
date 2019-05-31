import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';

import './PlaceMap.scss';
import MapContainer from './MapContainer';

export const PlaceMap = props => {
    return (
        <div className="PlaceMap" >
            <DetailsHeader icon={props.icon} label={props.label} />
            <MapContainer place={props.place} />
        </div>
    );
}
