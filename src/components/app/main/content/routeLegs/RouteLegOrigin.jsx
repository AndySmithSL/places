import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';

import './RouteLegOrigin.scss';

export const RouteLegOrigin = props => {
    return (
        <div className="RouteLegOrigin" >
            <DetailsHeader icon={props.icon} label={props.label} />
            <div className="DistanceLabel">
                <div className='label'>{props.distance}</div>
            </div>
        </div>
    );
}
