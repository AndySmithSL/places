import React from 'react';
import { connect } from 'react-redux';

import { fetchPlace } from '../../../../reducers/places';
import { setCategory } from '../../../../reducers/categories';
import { HomeItem } from './HomeItem';
import { DetailsHeader } from '../common/DetailsHeader';

import MapContainer from '../places/MapContainer';

import './HomeFeaturedPlace.scss';

class HomeFeaturedPlace extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick = id => {
        this.props.setCategory(this.props.category);
        this.props.fetchPlace(id);
    }

    render() {

        const { fetching, places, category } = this.props;
        
        if(fetching) {
            return (
                <div className='loading'>
                    LOADING...
                </div>
            )
        }

        const index = Math.floor((Math.random() * this.props.places.length) + 1);
        const place = places[index];

        return (
            <div className='HomeFeaturedPlace'>
                <DetailsHeader label='Featured Place' icon={category.icon}/>

                <div className='map'>
                    { place && <MapContainer place={place} /> } 
                </div>

                
                <div>{ place && place.name }</div>
                <div>{ place && place.flags[0] }</div>
                <div>{ place && place.latitude }</div>
                <div>{ place && place.longitude }</div>
                <div>{ place && place.zoom }</div>
                <div>{ place && place.localName }</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places.items,
        fetching: state.places.place.fetching,
        category: state.categories.categories.find(x => x.name === "Places")
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPlace: id => dispatch(fetchPlace(id)),
        setCategory: category => dispatch(setCategory(category))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeaturedPlace)
