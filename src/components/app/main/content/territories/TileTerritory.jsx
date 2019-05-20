import React from 'react';

import '../common/ContentTile.scss';
import './TileTerritory.scss';

function TileTerritory(props) {
    return (
        <div className="ContentTile TileTerritory" onClick={ () => props.handleClick(props.item.id) } >
            <div>
                <img src={props.icon} className="image" alt={props.item.name} />
            </div>
            <div className="details">
                <div className="title">{props.item.name}</div>
                <div className="subtitle">{props.item.fullName}</div>
            </div>
            <div className="left value">
                {props.item.isocode}
            </div>
        </div>
    );
}

export default TileTerritory;
