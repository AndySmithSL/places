import React from 'react';
import { getFullFlagImage } from '../../../utils/ImageDetails';

import './PlaceHeader.scss';

export const PlaceHeader = props => {

    const { place } = props;
    const flags = [];

    place && place.territories.map(territory => {
        return flags.push(<div><img src={getFullFlagImage(territory.flagImage)} className='image' alt={territory.name} /></div>);
    });

    return (
        <div className='PlaceHeader'>
            <div className='flags'>
                {flags}
            </div>
            <div className='label'>
                {place.name}
            </div>
            <div className='leftlabel'>
                {place.localName}
            </div>
        </div>
    )
};
