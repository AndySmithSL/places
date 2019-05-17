import React from 'react';
import './ContentHeader.scss';

export const ContentHeader = (props) => (
    <div className="ContentHeader">
        <div>
            <img src={props.selectedCategory.icon} className="image" alt={props.selectedCategory.name} />
        </div>
        <div className="label">
            {props.selectedCategory.name.toUpperCase()}
        </div>
    </div>
);
