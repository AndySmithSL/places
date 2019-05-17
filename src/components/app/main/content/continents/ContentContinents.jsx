import React from 'react';
import { connect } from 'react-redux';


import ContinentTile from './TileContinent';
import { fetchContinents, fetchContinent, continentsFilter } from '../../../../reducers/continents';
import { FilterableContentList } from '../common/FilterableContentList';
import { DashboardContinent } from './DashboardContinent';

import '../Content.scss';




class ContentContinents extends React.Component {

    constructor(props) {
        super(props);

        this.handleItemChange = this.handleItemChange.bind(this);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchContinents();
    }

    handleItemChange = (id) => {
        this.props.fetchContinent(id);
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

            items.push(<ContinentTile item={continent} icon={this.props.category.icon} handleClick={this.handleItemChange} key={continent.id} />)
        });

        return (
            <div className="ContentMain">
                <FilterableContentList onFilterTextChange={this.handleFilterTextChange} items={items} />
                <DashboardContinent item={this.props.continent} icon={this.props.category.icon} /> 
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.continents.isFetching,
        continents: state.continents.items,
        filter: state.continents.filter,
        continentId: state.continents.continentId,
        continent: state.continents.continent
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchContinents: url => dispatch(fetchContinents()),
        fetchContinent: id => dispatch(fetchContinent(id)),
        filterContinents: filter => dispatch(continentsFilter(filter))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentContinents)
