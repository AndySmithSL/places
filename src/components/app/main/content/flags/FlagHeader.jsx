import React from 'react';

import { getFullFlagImage } from '../../../utils/ImageDetails';

import './FlagHeader.scss';

export const FlagHeader = props => {

    const { flag } = props;
    const image = getFullFlagImage(flag.image);

    return (
        <div className="FlagHeader">
            <div>
                { flag.image && <img src={image} className="image" alt={flag.name} /> }
            </div>
            <div className="label">
                {flag.name}
            </div>
            <div className="leftlabel">
                {flag.code}
            </div>
        </div>
    )
};
