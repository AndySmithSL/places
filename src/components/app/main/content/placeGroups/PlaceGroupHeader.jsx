import React from 'react';
import { getFullPathImage } from '../../../utils/ImageDetails';
import './PlaceGroupHeader.scss';

export const PlaceGroupHeader = props => {

    const { placeGroup } = props;

    return (
        <div className="PlaceGroupHeader">
            <div>
                <img src={getFullPathImage(placeGroup.image)} className="image" alt={placeGroup.name} />
            </div>
            <div className="label">
                {placeGroup.name}
            </div>
        </div>
    )
};
