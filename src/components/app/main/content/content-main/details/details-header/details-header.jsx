import React from 'react';
import './details-header.scss';

export const DetailsHeader = (props) => {
    return (
        <div className="details-header">
            <div>
                <img src={props.icon} className="details-header-image" alt={props.icon} />
            </div>
            <div className="details-header-label">
                {props.title}
            </div>
        </div>
    )
};
