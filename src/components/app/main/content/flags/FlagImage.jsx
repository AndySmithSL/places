import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import { FLAG_PATH, ICON_PATH, ICON_FRAME } from '../../../utils/Global';

import './FlagImage.scss';

export const FlagImage = props => {

    const { flag } = props;
    const icon = ICON_PATH + ICON_FRAME;
    const image = FLAG_PATH + flag.image;

    return (
        <div className='FlagImage' >
            <DetailsHeader icon={icon} label='Image' />
            <div className="FlagImageItem">
                <img src={image} className="image" alt={props.flag.name} />
            </div>
        </div>
    );
}
