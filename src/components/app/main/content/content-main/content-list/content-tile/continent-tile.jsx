import React from 'react';
import './content-tile.scss';

function ContinentTile(props) {
    return (
        <div className="content-tile" onClick={ () => props.handleClick(props.item.id) } >
            <div>
                <img src={props.icon} className="content-tile-image" alt={props.item.name} />
            </div>
            <div className="content-tile-details">
                <div className="content-tile-title">{props.item.name}</div>
                <div className="content-tile-subtitle">{props.item.code}</div>
            </div>
            <div className="content-tile-left content-tile-value">
                {props.item.territories}
            </div>
        </div>
    );
}

export default ContinentTile;
