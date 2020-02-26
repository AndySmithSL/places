import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import RouteLegMap from './RouteLegMap';

import './RouteLegMapContent.scss';

export const RouteLegMapContent = props => {
    return (
        <div className="RouteLegMapContent" >
            <DetailsHeader icon={props.icon} label={props.label} />
            <RouteLegMap routeLeg={props.routeLeg} />
        </div>
    );
}
