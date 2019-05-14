import React from 'react';
import './content-tile.scss';
import './territory-type-tile.scss';

function TerritoryTypeTile(props) {
    return (
        <div className="content-tile" onClick={ () => props.handleClick(props.item.id) } >
            <div>
                <img src={props.icon} className="content-tile-image" alt={props.item.type} />
            </div>
            <div className="territory-type-tile-title">
                {props.item.type}
            </div>
            <div className="content-tile-left content-tile-value">
                {props.item.territories}
            </div>
        </div>
    );
}

export default TerritoryTypeTile;
