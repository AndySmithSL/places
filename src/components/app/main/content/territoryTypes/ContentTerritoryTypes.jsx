import React from 'react';
import { connect } from 'react-redux';

import { fetchTerritoryTypes, fetchTerritoryType } from '../../../../reducers/territoryTypes';
import ListTerritoryTypes from './ListTerritoryTypes';
import { DashboardTerritoryType } from './DashboardTerritoryType';

import '../Content.scss';

class ContentTerritoryTypes extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemChange = this.handleItemChange.bind(this); 
    }

    componentDidMount() {
        this.props.fetchTerritoryTypes();
    }

    handleItemChange = (id) => {
        this.props.fetchTerritoryType(id);
    }

    render() {
        return (
            <div className="ContentMain">
                <ListTerritoryTypes handleItemChange={this.handleItemChange} icon={this.props.category.icon} />
                <DashboardTerritoryType item={this.props.territoryType} icon={this.props.category.icon} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.territoryTypes.isFetching,
        territoryTypes: state.territoryTypes.items,
        filter: state.territoryTypes.filter,
        territoryTypeId: state.territoryTypes.territoryTypeId,
        territoryType: state.territoryTypes.territoryType
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchTerritoryTypes: url => dispatch(fetchTerritoryTypes()),
        fetchTerritoryType: id => dispatch(fetchTerritoryType(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentTerritoryTypes)
