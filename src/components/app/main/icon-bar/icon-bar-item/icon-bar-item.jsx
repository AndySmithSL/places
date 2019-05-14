import React from 'react';
import './icon-bar-item.scss';

function IconBarItem(props) {
    return (
        <div className="icon-bar-item">
            <img src={props.category.icon} className="icon-bar-image" alt={props.category.name} onClick={ () => props.handleClick(props.category) } />
        </div>
    );
}

export default IconBarItem;
