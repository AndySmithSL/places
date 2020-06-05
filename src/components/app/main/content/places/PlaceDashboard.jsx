import React from 'react';
import { connect } from 'react-redux';

import { PlaceHeader } from './PlaceHeader';
import PlaceLinks from './PlaceLinks';
import { PlaceDetails } from './PlaceDetails';
import Weather  from '../../../utils/weather/Weather';
import Time  from '../../../utils/time/Time';
import { PlaceMap } from './PlaceMap';
import { getFullPathImage } from '../../../utils/ImageDetails';

import './PlaceDashboard.scss';

class PlaceDashboard extends React.Component {

    render() {

        const { fetching, item } = this.props;

        if(fetching) {
            return (
                <div className='PlaceDashboard'>
                    LOADING...
                </div>
            );
        }

        console.log(item)

        return (
            <div className='PlaceDashboard'>
                <PlaceHeader place={item} />
                <PlaceLinks />
                <div className='row'>
                    <div className="row two-thirds">
                        <PlaceMap place={item} label='Map' icon={getFullPathImage("world-map")} />
                    </div>
                    <div className='row third'>
                        <PlaceDetails item={item} />
                        <Weather weather={item.weather} />
                        <Time weather={item.weather} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.places.place.fetching,
        item: state.places.place.item
    };
};

export default connect(mapStateToProps)(PlaceDashboard)
