import React from 'react';

import { DetailsHeader } from '../../main/content/common/DetailsHeader';
import { getFullPathImage } from '../ImageDetails';
//import { DailyWeather } from './DailyWeather';
//import { HourlyWeather } from './HourlyWeather';

import Clock  from '../Clock'
import TimezoneClock from '../TimezoneClock'

import './Time.scss';

class Time extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { weather } = this.props;

        let today = {}
        if (weather.daily.data.length > 0){
            today = weather.daily.data[0]
        }
        
        if(weather) {
            return (
                <div className='Time' >
                    <DetailsHeader icon={getFullPathImage("clock")} label='Time' />
                    <div className='PlaceDetailsRow' >
                        <div className='PlaceDetailsItem half'>
                            <div className="label">DATE</div>
                            <div className="value"><TimezoneClock offset={weather.offset} time={false} /></div>
                        </div>
                        <div className="PlaceDetailsItem half">
                            <div className="label">TIME</div>
                            <div className="value"><TimezoneClock offset={weather.offset} time={true} /></div>
                        </div>
                        <div className="PlaceDetailsItem half">
                            <div className="label">TIMEZONE</div>
                            <div className="value">{weather.timezone}</div>
                        </div>
                        <div className="PlaceDetailsItem half">
                            <div className="label">OFFSET</div>
                            <div className="value">{weather.offset}</div>
                        </div>
                        <div className="PlaceDetailsItem half">
                            <div className="label">SUNRISE</div>
                            <div className="value">{ today ? today.sunriseTime.timeLabel : '--'}</div>
                        </div>
                        <div className="PlaceDetailsItem half">
                            <div className="label">SUNSET</div>
                            <div className="value">{ today ? today.sunsetTime.timeLabel : '--'}</div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='Time' >
                    <DetailsHeader icon={getFullPathImage("clock")} label='Time' />
                    <div>No Data</div>
                </div>
            );
        }
    }
}

export default Time
