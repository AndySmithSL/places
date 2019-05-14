import React from 'react';
import './content-header.scss';

export const ContentHeader = (props) => (
    <div className="content-header">
        <div>
            <img src={props.selectedCategory.icon} className="content-header-image" alt={props.selectedCategory.name} />
        </div>
        <div className="content-header-label">
            {props.selectedCategory.name}
        </div>
    </div>
);
