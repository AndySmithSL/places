import React from 'react';
import { connect } from 'react-redux';

import { FilterableContentList } from '../common/FilterableContentList';
import { filterPlaces } from '../../../../reducers/places';


import './ListPlaces.scss';
import PlaceTile from './PlaceTile';
import { TilePlace } from './TilePlace';

class ListPlaces extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange = filter => {
        this.props.filterPlaces(filter);
    }

    render() {
        const items = [];
        const { places, filter } = this.props;

        places.forEach(place => {
            // Check if name is filtered out
            if(place.name.toUpperCase().indexOf(filter.toUpperCase()) === -1) {
                return;
            }

            //items.push(<PlaceTile place={place} flag={place.flags && place.flags[0]} key={place.id} />)
            items.push(<PlaceTile place={place} key={place.id} />)
        });

        return (
            <div className="ListPlaces">
                <FilterableContentList onFilterTextChange={this.handleFilterTextChange} items={items} filter={this.props.filter} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places.items,
        filter: state.places.filter,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        filterPlaces: filter => dispatch(filterPlaces(filter))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPlaces)
