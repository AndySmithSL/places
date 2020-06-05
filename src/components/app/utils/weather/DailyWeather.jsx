import React from 'react';
import { DailyItem } from './DailyItem'

import './DailyWeather.scss';

export const DailyWeather = props => {

    const { current, daily } = props;

    if(current && daily) {

        let currentDay = daily.data[0]
        let dayOne = daily.data[1]
        let dayTwo = daily.data[2]

        console.log(current.icon)
        console.log(dayOne.icon)
        console.log(dayTwo.icon)
        
        return (
            <div className='DailyWeather'>
                <DailyItem label='NOW' high={Math.round(currentDay.temperatureHigh.celsius)} low={Math.round(currentDay.temperatureLow.celsius)} current={Math.round(current.temperature.celsius)} image={current.icon} first={true} />
                <DailyItem label={dayOne.time.dayOfWeek} high={Math.round(dayOne.temperatureHigh.celsius)} low={Math.round(dayOne.temperatureLow.celsius)} current={Math.round(dayOne.temperatureHigh.celsius)} image={dayOne.icon} first={false} />
                <DailyItem label={dayTwo.time.dayOfWeek} high={Math.round(dayTwo.temperatureHigh.celsius)} low={Math.round(dayTwo.temperatureLow.celsius)} current={Math.round(dayTwo.temperatureHigh.celsius)} image={dayTwo.icon} first={false} />
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
