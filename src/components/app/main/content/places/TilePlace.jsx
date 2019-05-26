import React from 'react';

import '../common/ContentTile.scss';
import './TilePlace.scss';

function TilePlace(props) {
    return (
        <div className="ContentTile TilePlace" onClick={ () => props.handleClick(props.item.id) } >
            <div>
                <img src={props.icon} className="image" alt={props.item.name} />
            </div>
            <div className="details">
                <div className="title">{props.item.name}</div>
                <div className="subtitle">{props.item.localname}</div>
            </div>
        </div>
    );
}

export default TilePlace;
