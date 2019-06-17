import React from 'react';
import { connect } from 'react-redux';

import { FilterableContentList } from '../common/FilterableContentList';
import { filterPlaceGroups } from '../../../../reducers/placeGroups';
import PlaceGroupTile from './PlaceGroupTile';

import './ListPlaceGroups.scss';

class ListPlaceGroups extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange = filter => {
        this.props.filterPlaceGroups(filter);
    }

    render() {
        const items = [];

        this.props.placeGroups.forEach(placeGroup => {
            // Check if name is filtered out
            if(placeGroup.name.toUpperCase().indexOf(this.props.filter.toUpperCase()) === -1) {
                return;
            }

            items.push(<PlaceGroupTile placeGroup={placeGroup} key={placeGroup.id} />)
        });

        return (
            <div className="ListPlaceGroups">
                <FilterableContentList onFilterTextChange={this.handleFilterTextChange} items={items} filter={this.props.filter} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        placeGroups: state.placeGroups.items,
        filter: state.placeGroups.filter,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        filterPlaceGroups: filter => dispatch(filterPlaceGroups(filter))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPlaceGroups)
