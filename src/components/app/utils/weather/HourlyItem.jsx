import React from 'react';
import { getFullPathImage } from '../ImageDetails';

import './HourlyItem.scss';

export const HourlyItem = props => {

    const { time, temperature, image, first } = props;
    let css = first ? 'HourlyItemFirst' : 'HourlyItem';

    return (
        <div className={css}>
            <div className='HourlyLabel'>{time}</div>
            <div>
                <img src={getFullPathImage(image)} className='HourlyImage' alt='High' />
            </div>
            <div className='HourlyTemp'>
                <div className='label'>{temperature}</div>
                <div className='subLabel'>°C</div>
            </div>
        </div>
    )
};
