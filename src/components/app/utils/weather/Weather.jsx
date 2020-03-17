import React from 'react';
import { connect } from 'react-redux';

import { DetailsHeader } from '../../main/content/common/DetailsHeader';
import { getFullPathImage } from '../ImageDetails';
import { HourlyItem } from './HourlyItem';
import { DailyWeather } from './DailyWeather';

import './Weather.scss';

class Weather extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { weather } = this.props;
        console.log(weather)
        
        if(weather) {
            return (
                <div className='Weather' >
                    <DetailsHeader icon={getFullPathImage("weather")} label='Weather' />
                    <DailyWeather weather={weather.weather} main={weather.main} />
    
                    <div className='HourlyWeather'>
                        <HourlyItem time='9:00' image='partly-cloudy-day' temperature='10' first={true} />
                        <HourlyItem time='12:00' image='partly-cloudy-day' temperature='15' first={false} />
                        <HourlyItem time='15:00' image='partly-cloudy-day' temperature='17' first={false} />
                        <HourlyItem time='18:00' image='partly-cloudy-day' temperature='16' first={false} />
                        <HourlyItem time='21:00' image='partly-cloudy-day' temperature='13' first={false} />
                    </div>
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



        //console.log(weather.weather.main.temp)
        //℃=K-273.15
        
    }
}

const mapStateToProps = state => {
    return {
        weather: state.places.weather.weather
    };
};

export default connect(mapStateToProps)(Weather)
