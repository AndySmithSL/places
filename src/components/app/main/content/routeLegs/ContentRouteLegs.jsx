import React from 'react';
import { connect } from 'react-redux';

import ListRouteLegs from './ListRouteLegs';
import RouteLegDashboard from './RouteLegDashboard';

import '../Content.scss';

class ContentRouteLegs extends React.Component {

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
                <ListRouteLegs />
                <RouteLegDashboard />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.routeLegsMain.routeLegs.fetching
    };
};

export default connect(mapStateToProps)(ContentRouteLegs)
