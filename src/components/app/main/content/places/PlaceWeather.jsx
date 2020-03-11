import React from 'react';

import { DetailsHeader } from '../common/DetailsHeader';
import { getFullPathImage } from '../../../utils/ImageDetails';
import { HourlyItem } from '../../../utils/weather/HourlyItem';

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
                <HourlyItem time='9:00' image='partly-cloudy-day' temperature='10' first={true} />
                <HourlyItem time='12:00' image='partly-cloudy-day' temperature='15' first={false} />
                <HourlyItem time='15:00' image='partly-cloudy-day' temperature='17' first={false} />
                <HourlyItem time='18:00' image='partly-cloudy-day' temperature='16' first={false} />
                <HourlyItem time='21:00' image='partly-cloudy-day' temperature='13' first={false} />
            </div>
        </div>
    );
}
