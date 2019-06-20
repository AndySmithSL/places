import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import { ICON_PATH, ICON_MAP } from '../../../utils/Global';

import MapDirections from './MapDirections';

import './DriveMap.scss';

export const DriveMap = props => {

    const { drive } = props;
    const icon = ICON_PATH + ICON_MAP;
    
    return (
        <div className='DriveMap' >
            <DetailsHeader icon={icon} label='Map' />
            <MapDirections drive={drive} />
        </div>
    );
}
