import React from 'react';
import './IconBarItem.scss';

function IconBarItem(props) {
    return (
        <div className="IconBarItem" onClick={ () => props.handleClick(props.category) } >
            <img src={props.category.icon} className="image" alt={props.category.name}  />
        </div>
    );
}

export default IconBarItem;
