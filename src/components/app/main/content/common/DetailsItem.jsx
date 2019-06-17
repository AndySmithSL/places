import React from 'react';
import './DetailsItem.scss';

export const DetailsItem = props => (
    <div className="DetailsItem">
        <div className="label">
            {props.label.toUpperCase()}
        </div>
        <div className="value" >
            {props.value}
        </div>
    </div>
);
