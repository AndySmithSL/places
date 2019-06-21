import React from 'react';
import { getFullFlagImage } from '../../../utils/ImageDetails';

import './TerritoryHeader.scss';

export const TerritoryHeader = props => {

    const { territory } = props;
    const image = territory.flag && getFullFlagImage(territory.flag.image);

    return (
        <div className='TerritoryHeader'>
            <div>
                { territory.flag && <img src={image} className="image" alt={territory.name} /> }
            </div>
            <div className='label'>
                {territory.name}
            </div>
            <div className='leftlabel'>
                {territory.nativeName}
            </div>
        </div>
    )
};
