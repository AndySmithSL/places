import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import MapDirections from './MapDirections';
import { getFullPathImage } from '../../../utils/ImageDetails';

import './DriveMap.scss';

export const DriveMap = props => {
    return (
        <div className='DriveMap' >
            <DetailsHeader icon={getFullPathImage("world-map")} label='Map' />
            <MapDirections drive={props.drive} />
        </div>
    );
}
