import React from 'react';
import { FLAG_PATH } from '../../../utils/Global';

import './TerritoryHeader.scss';

export const TerritoryHeader = props => {

    const { territory } = props;
    const image = territory.flag && FLAG_PATH + territory.flag.image;

    return (
        <div className="TerritoryHeader">
            <div>
                { territory.flag && <img src={image} className="image" alt={territory.name} /> }
            </div>
            <div className="label">
                {territory.name}
            </div>
            <div className="leftlabel">
                {territory.nativeName}
            </div>
        </div>
    )
};
