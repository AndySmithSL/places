import React from 'react';
import { HourlyItem } from './HourlyItem'

import './HourlyWeather.scss';

export const HourlyWeather = props => {

    const { hourly } = props;

    if(hourly) {

        const items = [];
        let first = true;
        let count = 1;

        hourly.data.forEach(item => {
            if (count < 6) {
                items.push(<HourlyItem time={item.time.timeLabel} image={item.icon} temperature={Math.round(item.temperature.celsius)} first={first} key={item.time.ticks} />)
            }
            count ++;
            first = false;
        });
        
        return (
            <div className='HourlyWeather'>
                {items}
            </div>
        );
    } else {
        return (
            <div className="HourlyWeather">
                No Data
            </div>
        );
    }
};
