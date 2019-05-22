import React from 'react';

import '../common/ContentTile.scss';
import './TileFlag.scss';

function TileFlag(props) {
    return (
        <div className="ContentTile TileFlag" onClick={ () => props.handleClick(props.item.id) } >
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

export default TileFlag;
