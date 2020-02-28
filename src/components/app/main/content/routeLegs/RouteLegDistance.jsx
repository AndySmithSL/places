import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';

import './RouteLegDistance.scss';

export const RouteLegDistance = props => {
    return (
        <div className="RouteLegDistance" >
            <DetailsHeader icon={props.icon} label={props.label} />
            <div className="DistanceLabel">
                <div className='label'>{props.distance}</div>
            </div>
        </div>
    );
}
