import React from 'react';

import './HomeItem.scss';

export const HomeItem = props => {
    return (
        <div className="HomeItem" onClick={props.handleItemClick} >
            <div>
                <img src={props.category.icon} className="image" alt={props.category.name} />
            </div>
            <div className="label">
                {props.category.name.toUpperCase()}
            </div>
            <div className="value">
                {props.value}
            </div>
        </div>
    );
}
