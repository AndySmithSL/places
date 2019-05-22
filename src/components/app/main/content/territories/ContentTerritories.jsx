import React from 'react';
import { connect } from 'react-redux';

import { fetchTerritories, fetchTerritory } from '../../../../reducers/territories';
import ListTerritories from './ListTerritories';

import '../Content.scss';
import { DashboardTerritory } from './DashboardTerritory';


class ContentTerritories extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemChange = this.handleItemChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchTerritories();
    }

    handleItemChange = id => {
        this.props.fetchTerritory(id);
    }

    render() {
        return (
            <div className="ContentMain">
                <ListTerritories handleItemChange={this.handleItemChange} icon={this.props.category.icon} />
                <DashboardTerritory item={this.props.territory} icon={this.props.category.icon} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.territories.isFetching,
        territories: state.territories.items,
        filter: state.territories.filter,
        territoryId: state.territories.territoryId,
        territory: state.territories.territory
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTerritories: () => dispatch(fetchTerritories()),
        fetchTerritory: id => dispatch(fetchTerritory(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentTerritories)
