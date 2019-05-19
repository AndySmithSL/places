import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';

import './Subdivisions.scss';

export const Subdivisons = props => {

    let className = 'Subdivisions ' + props.size;

    return (
        <div className={className} >
            <DetailsHeader icon={props.icon} label={props.label} />
        </div>
    );
}
