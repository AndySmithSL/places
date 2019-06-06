import React from 'react';
import { connect } from 'react-redux';

import { fetchPlaces, fetchPlace } from '../../../../reducers/places';
import ListPlaces from './ListPlaces';
import { DashboardPlace } from './DashboardPlace';

import '../Content.scss';
import { Loading } from '../../../utils/Loading';
import PlaceDashboard from './PlaceDashboard';

class ContentPlaces extends React.Component {

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
                <ListPlaces />
                <PlaceDashboard />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.places.places.fetching,
    };
};

export default connect(mapStateToProps)(ContentPlaces)
