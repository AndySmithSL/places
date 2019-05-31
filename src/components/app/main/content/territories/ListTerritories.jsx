import React from 'react';
import { connect } from 'react-redux';

import { FilterableContentList } from '../common/FilterableContentList';
import { filterTerritories } from '../../../../reducers/territories';
import TerritoryTile from './TerritoryTile';

import './ListTerritories.scss';

class ListTerritories extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange = filter => {
        this.props.filterTerritories(filter);
    }

    render() {
        
        const items = [];
        const { territories, filter } = this.props;

        territories.forEach(territory => {
            // Check if name is filtered out
            if((territory.name.toUpperCase().indexOf(filter.toUpperCase()) === -1) &&
                (territory.isocode.toUpperCase().indexOf(filter.toUpperCase()) === -1)) {
                return;
            }

            items.push(<TerritoryTile territory={territory} key={territory.id} />)
        });

        return (
            <div className="ListTerritories">
                <FilterableContentList onFilterTextChange={this.handleFilterTextChange} items={items} filter={filter} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        territories: state.territories.items,
        filter: state.territories.filter,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        filterTerritories: filter => dispatch(filterTerritories(filter))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTerritories)
