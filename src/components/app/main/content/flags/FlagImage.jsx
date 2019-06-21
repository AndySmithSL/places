import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import { getFullPathImage, getFullFlagImage } from '../../../utils/ImageDetails';

import './FlagImage.scss';

export const FlagImage = props => {
    const { flag } = props;
    return (
        <div className='FlagImage' >
            <DetailsHeader icon={getFullPathImage("image")} label='Image' />
            <div className="FlagImageItem">
                <img src={getFullFlagImage(flag.image)} className="image" alt={flag.name} />
            </div>
        </div>
    );
}
