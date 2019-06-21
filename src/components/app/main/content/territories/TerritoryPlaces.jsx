import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import ContentList from '../common/ContentList';
import { getFullPathImage } from '../../../utils/ImageDetails';
import PlaceTile from '../places/PlaceTile';

import './TerritoryPlaces.scss';

export const TerritoryPlaces = props => {

    const { territory } = props;
    const flag = territory.flag && territory.flag.image;
    let items = [];
    
    territory.places.forEach(place => {
        items.push(<PlaceTile place={place} flag={flag} key={place.id} />)
    });

    return (
        <div className='TerritoryPlaces' >
            <DetailsHeader icon={getFullPathImage("place-marker")} label='Places' />
            <ContentList items={items} />
        </div>
    );
}
