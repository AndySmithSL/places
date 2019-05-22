import React from 'react';

import '../common/ContentTile.scss';
import './TileTerritoryType.scss';

function TileTerritoryType(props) {
    return (
        <div className="ContentTile TileTerritoryType" onClick={ () => props.handleClick(props.item.id) } >
            <div>
                <img src={props.icon} className="image" alt={props.item.type} />
            </div>
            <div className="title">
                {props.item.type}
            </div>
            <div className="left value">
                {props.item.territories}
            </div>
        </div>
    );
}

export default TileTerritoryType;
