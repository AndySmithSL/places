import React from 'react';

import { DetailsHeader } from '../../main/content/common/DetailsHeader';
import { getFullPathImage } from '../ImageDetails';
import { DailyWeather } from './DailyWeather';
import { HourlyWeather } from './HourlyWeather';

import './Weather.scss';

class Weather extends React.Component {

    render() {

        const { weather } = this.props;
        
        if(weather) {
            return (
                <div className='Weather' >
                    <DetailsHeader icon={getFullPathImage("weather")} label='Weather' />
                    <DailyWeather current={weather.current} daily={weather.daily} />
                    <HourlyWeather hourly={weather.hourly} />
                </div>
            );
        } else {
            return (
                <div className='Weather' >
                    <DetailsHeader icon={getFullPathImage("weather")} label='Weather' />
                    <div>No Data</div>
                </div>
            );
        }
    }
}

export default Weather
