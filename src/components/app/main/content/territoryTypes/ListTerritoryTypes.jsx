import React from 'react';
import { connect } from 'react-redux';

import { FilterableContentList } from '../common/FilterableContentList';
import { filterTerritoryTypes } from '../../../../reducers/territoryTypes';
import TileTerritoryType from './TileTerritoryType';

import './ListTerritoryTypes.scss';

class ListTerritoryTypes extends React.Component {
    constructor(props) {
        super(props);

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange = filter => {
        this.props.filterTerritoryTypes(filter);
    }

    render() {
        const items = [];

        this.props.territoryTypes.forEach(territoryType => {

            // Check if name is filtered out
            if(territoryType.type.toUpperCase().indexOf(this.props.filter.toUpperCase()) === -1) 
            {
                return;
            }

            items.push(<TileTerritoryType item={territoryType} icon={this.props.icon} handleClick={this.props.handleItemChange} key={territoryType.id} />)
        });

        return (
            <div className="ListTerritoryTypes">
                <FilterableContentList onFilterTextChange={this.handleFilterTextChange} items={items} filter={this.props.filter} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        territoryTypes: state.territoryTypes.items,
        filter: state.territoryTypes.filter,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        filterTerritoryTypes: filter => dispatch(filterTerritoryTypes(filter))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTerritoryTypes)
