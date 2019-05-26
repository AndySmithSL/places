import React from 'react';

import '../common/ContentTile.scss';
import './TilePlaceGroup.scss';

export const TilePlaceGroup = props => {
    return (
        <div className="ContentTile TilePlaceGroup" onClick={ () => props.handleClick(props.item.id) } >
            <div>
                <img src={props.icon} className="image" alt={props.item.name} />
            </div>
            <div className="details">
                <div className="title">{props.item.name}</div>
            </div>
        </div>
    );
}
