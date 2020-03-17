import React from 'react';
import { getFullPathImage } from '../ImageDetails';
import { DailyItem } from './DailyItem'

import './DailyWeather.scss';

export const DailyWeather = props => {

    const { weather, main } = props;

    if(weather && main) {

        console.log(weather)
        console.log(main)

        var current = Math.round(main.temp - 273.15)
        var temp_min = Math.round(main.temp_min - 273.15)
        var temp_max = Math.round(main.temp_max - 273.15)
       
        return (
            <div className='DailyWeather'>
                <DailyItem label='NOW' high={temp_max} low={temp_min} current={current} image='partly-cloudy-day' first='true' />
            </div>
        );
    } else {
        return (
            <div className="DailyWeather">
                No Data
            </div>
        );
    }
};
