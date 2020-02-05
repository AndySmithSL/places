import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';

import './RouteMap.scss';
import SimpleMap from './SimpleMap';
import SimpleMap2 from './SimpleMap2';

export const RouteMap = props => {
    return (
        <div className="RouteMap" >
            <DetailsHeader icon={props.icon} label={props.label} />
            <SimpleMap2 route={props.route} />
        </div>
    );
}
