import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';

import './RouteMap.scss';
import SimpleMap from './SimpleMap';

export const RouteMap = props => {
    return (
        <div className="RouteMap" >
            <DetailsHeader icon={props.icon} label={props.label} />
            <SimpleMap route={props.route} />
        </div>
    );
}
