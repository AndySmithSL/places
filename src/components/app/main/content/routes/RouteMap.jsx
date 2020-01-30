import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import RoutesMapDirections from './RoutesMapDirections';
import { getFullPathImage } from '../../../utils/ImageDetails';

import './RouteMap.scss';

export const RouteMap = props => {
    return (
        <div className='RouteMap' >
            <DetailsHeader icon={getFullPathImage("world-map")} label='Map' />
            <RoutesMapDirections route={props.route} />
        </div>
    );
}
