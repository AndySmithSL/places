import React from 'react';

import './DashboardHeader.scss';

export const DashboardHeader = (props) => {
    return (
        <div className="DashboardHeader">
            <div>
                <img src={props.icon} className="image" alt={props.icon} />
            </div>
            <div className="label">
                {props.title}
            </div>
        </div>
    )
};
