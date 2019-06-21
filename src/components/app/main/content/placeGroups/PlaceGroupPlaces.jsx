import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import ContentList from '../common/ContentList';
import PlaceGroupPlaceItem from './PlaceGroupPlaceItem';
import { getFullPathImage } from '../../../utils/ImageDetails';

import './PlaceGroupPlaces.scss';

export const PlaceGroupPlaces = props => {

    const { placeGroup } = props;
    const icon = getFullPathImage("place-marker");
    let items = [];
    
    placeGroup.places.forEach(place => {
        const flag = place.flags[0] && place.flags[0];
        items.push(<PlaceGroupPlaceItem place={place} flag={flag} key={place.id} />)
    });

    return (
        <div className='PlaceGroupPlaces' >
            <DetailsHeader icon={icon} label='Places' />
            <ContentList items={items} />
        </div>
    );
}
