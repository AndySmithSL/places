import React from 'react';
import { getFullPathImage } from '../ImageDetails';

import './DailyItem.scss';

export const DailyItem = props => {

    const { label, high, low, current, image, first } = props;
    let css = first ? 'DailyItemFirst' : 'DailyItem';

    return (
        <div className={css}>
            <div className='label'>{label}</div>
            <div className='LowHigh'>
                <img src={getFullPathImage("up-arrow")} className='image' alt='High' />
                <div className='lowHighLabel'>{high}</div>
                <img src={getFullPathImage("down-arrow")} className='image' alt='Low' />
                <div className='lowHighLabel'>{low}</div>
            </div>
            <div className='Current'>
                <div className='currentLabel'>{current}</div>
                <div className='currentSubLabel'>°C</div>
                <img src={getFullPathImage(image)} className='currentImage' alt='High' />
            </div>
        </div>
    )
};
