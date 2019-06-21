import React from 'react';
import { connect } from 'react-redux';

import { setCategory } from '../../../../reducers/categories';
import { fetchPlace } from '../../../../reducers/places';
import { isEmpty } from '../../../../reducers/commonFunctions';

import { getFullFlagImage } from '../../../utils/ImageDetails';

import './PlaceGroupPlaceItem.scss';

class PlaceGroupPlaceItem extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItemClick = (category, id) => {
        this.props.fetchPlace(id);
        this.props.setCategory(category);
    };

    render() {

        const { place, flag, category } = this.props;
        const icon = isEmpty(flag) ? category.icon : getFullFlagImage(flag);

        return (
            <div className="PlaceGroupPlaceItem" onClick={ () => this.handleItemClick(category, place.id) } >
                <div>
                    <img src={icon} className="image" alt={place.name} />
                </div>
                <div className="details quarter">
                    <div className="title">{place.name}</div>
                </div>
                <div className="details quarter">
                    <div className="title">{ !place.localName ? "--" : place.localName }</div>
                </div>
                <div className="details quarter">
                    <div className="title">{ place.latitudeDegrees }</div>
                </div>
                <div className="details quarter">
                    <div className="title">{ place.longitudeDegrees }</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        category: state.categories.categories.find(x => x.name === 'Places')
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setCategory: category => dispatch(setCategory(category)),
        fetchPlace: id => dispatch(fetchPlace(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceGroupPlaceItem)
