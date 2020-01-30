import React from 'react';
import { connect } from 'react-redux';

import { FilterableContentList } from '../common/FilterableContentList';
import { filterRoutes } from '../../../../reducers/routes';
import RouteTile from './RouteTile';

import './ListRoutes.scss';

class ListRoutes extends React.Component {

    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange = filter => {
        this.props.filterRoutes(filter);
    }

    render() {
        const { routes, filter } = this.props;
        const items = [];

        routes.forEach(route => {
            // Check if name is filtered out
            if(route.name.toUpperCase().indexOf(filter.toUpperCase()) === -1) {
                return;
            }

            items.push(<RouteTile route={route} key={route.id} />)
        });

        return (
            <div className='ListRoutes'>
                <FilterableContentList onFilterTextChange={this.handleFilterTextChange} items={items} filter={this.props.filter} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        routes: state.routes.routes.items,
        filter: state.routes.filter,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        filterRoutes: filter => dispatch(filterRoutes(filter))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListRoutes)
