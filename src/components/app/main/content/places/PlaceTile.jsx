import React from 'react';
import { connect } from 'react-redux';

import { setCategory } from '../../../../reducers/categories';
import { fetchPlace, fetchOpenWeather, fetchDarkSkyWeather } from '../../../../reducers/places';
import { isEmpty } from '../../../../reducers/commonFunctions';
import { getFullFlagImage } from '../../../utils/ImageDetails';

import './PlaceTile.scss';

class PlaceTile extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick = (category, place) => {
        this.props.fetchPlace(place.id);
        //this.props.fetchOpenWeather(place.name);
        //this.props.fetchDarkSkyWeather(place.latitude, place.longitude);
        this.props.setCategory(category);
    };

    render() {

        const { place, flag, category } = this.props;
        console.log(flag);
        const icon = isEmpty(flag) ? category.icon : getFullFlagImage(flag);

        return (
            <div className='PlaceTile' onClick={ () => this.handleItemClick(category, place) } >
                <div>
                    <img src={icon} className='image' alt={place.name} />
                </div>
                <div className='details'>
                    <div className='title'>{place.name}</div>
                    <div className='subtitle'>{ !place.localName ? "--" : place.localName }</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        category: state.categories.categories.find(x => x.name === "Places")
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCategory: category => dispatch(setCategory(category)),
        fetchPlace: id => dispatch(fetchPlace(id)),
        fetchOpenWeather: location => dispatch(fetchOpenWeather(location)),
        fetchDarkSkyWeather: (latitude, longitude) => dispatch(fetchDarkSkyWeather(latitude, longitude))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceTile)
