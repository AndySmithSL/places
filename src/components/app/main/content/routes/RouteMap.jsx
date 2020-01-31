import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';

import './RouteMap.scss';
import RouteMapContainer from './RouteMapContainer';

export const RouteMap = props => {
    return (
        <div className="RouteMap" >
            <DetailsHeader icon={props.icon} label={props.label} />
            <RouteMapContainer route={props.route} />
        </div>
    );
}
