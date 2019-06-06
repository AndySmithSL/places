import React from 'react';
import { FLAG_PATH } from '../../../utils/Global';

import './PlaceHeader.scss';

export const PlaceHeader = props => {

    const { place } = props;
   // const image = territory.flag && FLAG_PATH + territory.flag.image;

    const flags = [];

    place.territories.map(territory => {
        flags.push(
            <div>
                <img src={FLAG_PATH + territory.flagImage} className="image" alt={territory.name} />
            </div>
        );
    });

    return (
        <div className="PlaceHeader">
            <div className="flags">
                {flags}
            </div>
            <div className="label">
                {place.name}
            </div>
            <div className="leftlabel">
                {place.localName}
            </div>
        </div>
    )
};
