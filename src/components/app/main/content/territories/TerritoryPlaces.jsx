import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import ContentList from '../common/ContentList';
import { ICON_PATH, ICON_MARKER } from '../../../utils/Global';
import PlaceTile from '../places/PlaceTile';

import './TerritoryPlaces.scss';

export const TerritoryPlaces = props => {

    const { territory } = props;
    const icon = ICON_PATH + ICON_MARKER;
    const flag = territory.flag && territory.flag.image;
    let items = [];
    
    territory.places.forEach(place => {
        items.push(<PlaceTile place={place} flag={flag} key={place.id} />)
    });

    return (
        <div className="TerritoryPlaces" >
            <DetailsHeader icon={icon} label='Places' />
            <ContentList items={items} />
        </div>
    );
}
