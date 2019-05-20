import React from 'react';

import '../common/ContentTile.scss';
import './TileContinent.scss';

function TileContinent(props) {
    return (
        <div className="ContentTile TileContinent" onClick={ () => props.handleClick(props.item.id) } >
            <div>
                <img src={props.icon} className="image" alt={props.item.name} />
            </div>
            <div className="details">
                <div className="title">{props.item.name}</div>
                <div className="subtitle">{props.item.code}</div>
            </div>
            <div className="left value">
                {props.item.listValue}
            </div>
        </div>
    );
}

export default TileContinent;
