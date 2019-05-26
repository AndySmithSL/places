import React from 'react';
import { connect } from 'react-redux';

import { fetchTerritories, fetchTerritory } from '../../../../reducers/territories';
import ListTerritories from './ListTerritories';

import '../Content.scss';
import DashboardTerritory from './DashboardTerritory';
import { Loading } from '../../../utils/Loading';


class ContentTerritories extends React.Component {

    render() {

        const { fetching } = this.props;

        if(fetching) {
            return (
                <div className="ContentMain">
                    <Loading />
                </div>
            );
        }

        return (
            <div className="ContentMain">
                <ListTerritories />
                <DashboardTerritory />
            </div>
        );
    }
}

const mapStateToProps = state => {

    //AS: Debug
    console.log(state);
    return {
        fetching: state.territories.fetchingItems
    };
};

export default connect(mapStateToProps)(ContentTerritories)
