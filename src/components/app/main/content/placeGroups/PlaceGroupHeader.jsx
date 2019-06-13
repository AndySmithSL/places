import React from 'react';
import { ICON_PATH } from '../../../utils/Global';

import './PlaceGroupHeader.scss';

export const PlaceGroupHeader = props => {

    const { placeGroup } = props;

    return (
        <div className="PlaceGroupHeader">
            <div>
                <img src={ICON_PATH + placeGroup.image} className="image" alt={placeGroup.name} />
            </div>
            <div className="label">
                {placeGroup.name}
            </div>
        </div>
    )
};
