import React from 'react';

export const TilePlace = props => {

    const { handleItemClick, place, category } = props;

    return (
        <div className="PlaceTile" onClick={ () => handleItemClick(category, place.id) } >
            <div>
                <img src={category.icon} className="image" alt={place.name} />
            </div>
            <div className="details">
                <div className="title">{place.name}</div>
                <div className="subtitle">{ !place.localName ? "--" : place.localName }</div>
            </div>
        </div>
    );
};
