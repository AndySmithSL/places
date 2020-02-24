import React from 'react';
import { connect } from 'react-redux';

import { FilterableContentList } from '../common/FilterableContentList';
import { filterRouteLegs } from '../../../../reducers/routeLegs';
import RouteLegTile from './RouteLegTile';

import './ListRouteLegs.scss';

class ListRouteLegs extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange = filter => {
        this.props.filterRouteLegs(filter);
    }

    render() {
        const { routeLegs, filter } = this.props;
        const items = [];

        routeLegs.forEach(routeLeg => {
            // Check if name is filtered out
            if(routeLeg.route.name.toUpperCase().indexOf(filter.toUpperCase()) === -1) {
                return;
            }

            items.push(<RouteLegTile routeLeg={routeLeg} key={route.id} />)
        });

        return (
            <div className='ListRouteLegs'>
                <FilterableContentList onFilterTextChange={this.handleFilterTextChange} items={items} filter={filter} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        routeLegs: state.routeLegsMain.routeLegs.items,
        filter: state.routeLegsMain.filter,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        filterRouteLegs: filter => dispatch(filterRouteLegs(filter))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListRouteLegs)
