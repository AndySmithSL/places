import React from 'react';
import { getFullPathImage } from '../ImageDetails';

import './DailyWeather.scss';

export const DailyWeather = props => {

    const { weather, main } = props;

    if(weather && main) {
        return (
            <div className="TerritoryDashboard">
                LOADING...
            </div>
        );
    } else {
        return (
            <div className="TerritoryDashboard">
                No Data
            </div>
        );
    }

    return (
        <div className='DailyWeather'>
            <div className='dailyItemFirst'>
                <div className='label'>NOW</div>
                <div className='lowHigh'>
                    <img src={getFullPathImage("up-arrow")} className='image' alt='High' />
                    <div className='lowHighLabel'>10</div>
                    <img src={getFullPathImage("down-arrow")} className='image' alt='High' />
                    <div className='lowHighLabel'>4</div>
                </div>
                <div className='current'>
                    <div className='currentLabel'>10</div>
                    <div className='currentSubLabel'>°C</div>
                    <img src={getFullPathImage("partly-cloudy-day")} className='currentImage' alt='High' />
                </div>
            </div>
            <div className='dailyItem'>
                <div className='label'>FRIDAY</div>
                <div className='lowHigh'>
                    <img src={getFullPathImage("up-arrow")} className='image' alt='High' />
                    <div className='lowHighLabel'>10</div>
                    <img src={getFullPathImage("down-arrow")} className='image' alt='High' />
                    <div className='lowHighLabel'>4</div>
                </div>
                <div className='current'>
                    <div className='currentLabel'>10</div>
                    <div className='currentSubLabel'>°C</div>
                    <img src={getFullPathImage("partly-cloudy-day")} className='currentImage' alt='High' />
                </div>
            </div>
            <div className='dailyItem'>
                <div className='label'>SATURDAY</div>
                <div className='lowHigh'>
                    <img src={getFullPathImage("up-arrow")} className='image' alt='High' />
                    <div className='lowHighLabel'>10</div>
                    <img src={getFullPathImage("down-arrow")} className='image' alt='High' />
                    <div className='lowHighLabel'>4</div>
                </div>
                <div className='current'>
                    <div className='currentLabel'>10</div>
                    <div className='currentSubLabel'>°C</div>
                    <img src={getFullPathImage("partly-cloudy-day")} className='currentImage' alt='High' />
                </div>
            </div>
        </div>
    )
};
