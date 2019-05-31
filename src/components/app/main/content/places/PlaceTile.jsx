import React from 'react';
import { connect } from 'react-redux';

import { FLAG_PATH } from '../../../utils/Global';
import { setCategory } from '../../../../reducers/categories';
import { fetchPlace } from '../../../../reducers/places';

import './PlaceTile.scss';

class PlaceTile extends React.Component {

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
        const flagImage = place && FLAG_PATH + flag;
        console.log(place);
       
        return (
            <div className="PlaceTile" onClick={ () => this.handleItemClick(category, place.id) } >
                <div>
                    <img src={flagImage} className="image" alt={place.name} />
                </div>
                <div className="details">
                    <div className="title">{place.name}</div>
                    <div className="subtitle">{ !place.localName ? "--" : place.localName }</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PlaceTile)
