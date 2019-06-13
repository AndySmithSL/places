import React from 'react';
import { connect } from 'react-redux';

import ListPlaces from './ListPlaces';
import { Loading } from '../../../utils/Loading';
import PlaceDashboard from './PlaceDashboard';

import '../Content.scss';

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
