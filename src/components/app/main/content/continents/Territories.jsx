import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';

import './Territories.scss';

export const Territories = props => {
    return (
        <div className="Territories" >
            <DetailsHeader icon={props.icon} label={props.label} />
            
        </div>
    );
}
