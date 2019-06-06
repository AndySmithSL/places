import React from 'react';
import { connect } from 'react-redux';

import { FilterableContentList } from '../common/FilterableContentList';
import { filterPlaces } from '../../../../reducers/places';


import './PlaceLinks.scss';
import PlaceTile from './PlaceTile';
import { TilePlace } from './TilePlace';
import TerritoryLink from '../territories/TerritoryLink';
import PlaceGroupLink from '../placeGroups/PlaceGroupLink';

class PlaceLinks extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange = filter => {
        this.props.filterPlaces(filter);
    }

    render() {
        const items = [];
        const { place } = this.props;

        place.territories.forEach(territory => {
            items.push(<TerritoryLink territory={territory} key={territory.id} />)
        });

        place.groups.forEach(group => {
            items.push(<PlaceGroupLink placeGroup={group} key={group.id} />)
        });

        return (
            <div className="PlaceLinks">
                {items}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        place: state.places.place.item,
        filter: state.places.filter,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        filterPlaces: filter => dispatch(filterPlaces(filter))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceLinks)
