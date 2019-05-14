import React from 'react';
import './content-tile.scss';

function ContentTile(props) {
    return (
        <div className="content-tile" onClick={ () => props.handleClick(props.id) } >
            {/* <div>
                <img src={props.selectedCategory.icon} className="content-header-image" alt={props.selectedCategory.name} />
            </div> */}
            <div className="content-tile-details">
                <div className="content-tile-title">{props.title}</div>
                <div className="content-tile-subtitle">{props.subTitle}</div>
            </div>
            <div className="content-tile-left content-tile-value">
                {props.value}
            </div>
        </div>
    );
}

export default ContentTile;
