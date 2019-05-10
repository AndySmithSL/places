import React from 'react';
import './details-header.scss';

export const DetailsHeader = (props) => {
    return (
        <div className="details-header">
            <div>
                <img src={props.image} className="details-header-image" alt="continents"/>
            </div>
            <div className="details-header-label">
                {props.title}
            </div>
        </div>
    )
};
