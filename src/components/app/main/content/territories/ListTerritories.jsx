import React from 'react';
import { connect } from 'react-redux';

import { FilterableContentList } from '../common/FilterableContentList';
import { filterTerritories } from '../../../../reducers/territories';
import TileTerritory from './TileTerritory';

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

        this.props.territories.forEach(territory => {
            // Check if name is filtered out
            if((territory.name.toUpperCase().indexOf(this.props.filter.toUpperCase()) === -1) &&
                (territory.isocode.toUpperCase().indexOf(this.props.filter.toUpperCase()) === -1)) {
                return;
            }

            items.push(<TileTerritory item={territory} icon={this.props.icon} handleClick={this.props.handleItemChange} key={territory.id} />)
        });

        return (
            <div className="ListTerritories">
                <FilterableContentList onFilterTextChange={this.handleFilterTextChange} items={items} filter={this.props.filter} />
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
