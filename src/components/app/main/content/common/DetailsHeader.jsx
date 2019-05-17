import React from 'react';
import './DetailsHeader.scss';

export const DetailsHeader = props => (
    <div className="DetailsHeader">
        <div>
            <img src={props.icon} className="image" alt={props.label} />
        </div>
        <div className="label">
            {props.label.toUpperCase()}
        </div>
    </div>
);
