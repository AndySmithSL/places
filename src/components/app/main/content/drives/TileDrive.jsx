import React from 'react';

import '../common/ContentTile.scss';
import './TileDrive.scss';

export const TileDrive = props => {
    return (
        <div className="ContentTile TileDrive" onClick={ () => props.handleClick(props.item.id) } >
            <div>
                <img src={props.icon} className="image" alt={props.item.name} />
            </div>
            <div className="details">
                <div className="title">{props.item.name}</div>
            </div>
        </div>
    );
}
