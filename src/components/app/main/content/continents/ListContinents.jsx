import React from 'react';
import { connect } from 'react-redux';

import TileContinent from './TileContinent';
import { FilterableContentList } from '../common/FilterableContentList';
import { continentsFilter } from '../../../../reducers/continents';

import './ListContinents.scss';

class ListContinents extends React.Component {
    constructor(props) {
        super(props);

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange = filter => {
        this.props.filterContinents(filter);
    }

    render() {
        const items = [];

        this.props.continents.forEach(continent => {

            // Check if name is filtered out
            if((continent.name.toUpperCase().indexOf(this.props.filter.toUpperCase()) === -1) 
                && (continent.code.toUpperCase().indexOf(this.props.filter.toUpperCase()) === -1))
            {
                return;
            }

            items.push(<TileContinent item={continent} icon={this.props.icon} handleClick={this.props.handleItemChange} key={continent.id} />)
        });

        return (
            <div className="ListContinents">
                <FilterableContentList onFilterTextChange={this.handleFilterTextChange} items={items} filter={this.props.filter} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        continents: state.continents.items,
        filter: state.continents.filter,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        filterContinents: filter => dispatch(continentsFilter(filter))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContinents)
