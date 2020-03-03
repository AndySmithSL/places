import React from 'react';
import { connect } from 'react-redux';

import { setCategory } from '../../../../reducers/categories';
import { fetchPlace } from '../../../../reducers/places';
import { getFullFlagImage } from '../../../utils/ImageDetails';

import { DetailsItem } from '../common/DetailsItem';
import { DetailsHeader } from '../common/DetailsHeader';

import './RouteLegPlace.scss';

class RouteLegPlace extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick = (category, id) => {
        this.props.fetchPlace(id);
        this.props.setCategory(category);
    };

    render() {

        console.log(this.props)
        const { place, category, label } = this.props;

        const flag = place.flags.length > 0 ? getFullFlagImage(place.flags[0]) : category.icon;

        return (
            <div className="RouteLegPlace" >
                <DetailsHeader label={label} icon={category.icon}/>
                { origin &&
                    <div className='RouteLegPlaceHeader' onClick={ () => this.handleItemClick(category, place.id) }>
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

                { origin && 
                    <div className='RouteLegPlaceDetails'>
                        <div className='half'>
                            <DetailsItem label='Local Name' value={place.localName} />
                        </div>
                        <div className='half'>
                            <DetailsItem className='half' label='ID' value={place.id} />
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
        category: state.categories.categories.find(x => x.name === "Places")
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCategory: category => dispatch(setCategory(category)),
        fetchPlace: id => dispatch(fetchPlace(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteLegPlace)
