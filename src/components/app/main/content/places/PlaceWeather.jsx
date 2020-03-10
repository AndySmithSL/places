import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import { getFullPathImage } from '../../../utils/ImageDetails';

import './PlaceWeather.scss';

export const PlaceWeather = props => {

    const { item } = props;

    return (
        <div className='PlaceWeather' >
            <DetailsHeader icon={getFullPathImage("weather")} label='Weather' />

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

            <div className='HourlyWeather'>
                <div className='hourlyItemFirst'>
                    <div className='label'>18:00</div>
                    <div>
                        <img src={getFullPathImage("partly-cloudy-day")} className='image' alt='High' />
                    </div>
                    <div className='hourlyTemp'>
                        <div className='label'>10</div>
                        <div className='subLabel'>°C</div>
                    </div>
                </div>
                <div className='hourlyItem'>
                    <div className='label'>19:00</div>
                    <div>
                        <img src={getFullPathImage("partly-cloudy-day")} className='image' alt='High' />
                    </div>
                    <div className='hourlyTemp'>
                        <div className='label'>10</div>
                        <div className='subLabel'>°C</div>
                    </div>
                </div>
                <div className='hourlyItem'>
                    <div className='label'>20:00</div>
                    <div>
                        <img src={getFullPathImage("partly-cloudy-day")} className='image' alt='High' />
                    </div>
                    <div className='hourlyTemp'>
                        <div className='label'>10</div>
                        <div className='subLabel'>°C</div>
                    </div>
                </div>
                <div className='hourlyItem'>
                    <div className='label'>21:00</div>
                    <div>
                        <img src={getFullPathImage("partly-cloudy-day")} className='image' alt='High' />
                    </div>
                    <div className='hourlyTemp'>
                        <div className='label'>10</div>
                        <div className='subLabel'>°C</div>
                    </div>
                </div>
                <div className='hourlyItem'>
                    <div className='label'>22:00</div>
                    <div>
                        <img src={getFullPathImage("partly-cloudy-day")} className='image' alt='High' />
                    </div>
                    <div className='hourlyTemp'>
                        <div className='label'>10</div>
                        <div className='subLabel'>°C</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
