import React from 'react';
import { connect } from 'react-redux';

import { fetchPlace } from '../../../../reducers/places';
import { setCategory } from '../../../../reducers/categories';
import { DetailsHeader } from '../common/DetailsHeader';
import { DetailsItem } from '../common/DetailsItem';
import { createStringFromList } from '../../../../reducers/commonFunctions';
import FeaturedMapContainer from './FeaturedMapContainer';
import { getFullFlagImage } from '../../../utils/ImageDetails';

import './HomeFeaturedPlace.scss';

class HomeFeaturedPlace extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick = (category, id) => {
        this.props.setCategory(category);
        this.props.fetchPlace(id);
    }

    render() {

        const { fetching, places, category } = this.props;
        
        if(fetching) {
            return (
                <div className='loading'>LOADING...</div>
            )
        }

        const index = Math.floor((Math.random() * this.props.places.length) + 1);
        const place = places[index];
        const flag = place && getFullFlagImage(place.flags[0]);
        const territories = place && createStringFromList(place.territories)

        return (
            <div className='HomeFeaturedPlace'>
                <DetailsHeader label='Featured Place' icon={category.icon}/>

                { place &&
                    <div className='FeaturedPlaceHeader' onClick={ () => this.handleItemClick(category, place.id) }>
                        <div>
                            <img src={flag} className='image' alt={place.name} />
                        </div>
                        <div className='details'>
                            <div className='title'>
                                {place.name}
                            </div>
                            <div className='subtitle'>
                                {place.territories}
                            </div>
                        </div>
                    </div>
                }

                { place && 
                    <div className='map'>
                        <FeaturedMapContainer place={place} /> 
                    </div>
                }

                { place && 
                    <div className='details'>
                        <div className='half'>
                            <DetailsItem label='Local Name' value={place.localName} />
                        </div>
                        <div className='half'>
                            <DetailsItem className='half' label='Territories' value={territories} />
                        </div>
                        <div className='half'>
                            <DetailsItem className='half' label='Latitude' value={place.latitudeDegrees} />
                        </div>
                        <div className='half'>
                            <DetailsItem className='half' label='Longitude' value={place.longitudeDegrees} />
                        </div>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places.items,
        fetching: state.places.places.fetching,
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
