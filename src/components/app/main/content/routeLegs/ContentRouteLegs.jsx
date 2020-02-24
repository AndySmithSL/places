import React from 'react';
import { connect } from 'react-redux';

import ListRoutes from './ListRoutes';
import RouteDashboard from './RouteDashboard';

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
                <ListRoutes />
                <RouteDashboard />
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
