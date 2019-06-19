import React from 'react';
import { connect } from 'react-redux';

import ListTerritoryTypes from './ListTerritoryTypes';
import TerritoryTypeDashboard from './TerritoryTypeDashboard';

import '../Content.scss';


class ContentTerritoryTypes extends React.Component {

    render() {

        const { fetching } = this.props;

        if(fetching) {
            return (
                <div className="ContentMain">
                    LOADING...
                </div>
            );
        }

        return (
            <div className="ContentMain">
                <ListTerritoryTypes />
                <TerritoryTypeDashboard />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.territoryTypes.territoryTypes.fetching
    };
};

export default connect(mapStateToProps)(ContentTerritoryTypes)
