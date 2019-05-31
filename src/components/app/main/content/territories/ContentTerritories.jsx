import React from 'react';
import { connect } from 'react-redux';

import ListTerritories from './ListTerritories';
import TerritoryDashboard from './TerritoryDashboard';

import '../Content.scss';

class ContentTerritories extends React.Component {

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
                <ListTerritories />
                <TerritoryDashboard />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.territories.fetchingItems
    };
};

export default connect(mapStateToProps)(ContentTerritories)
