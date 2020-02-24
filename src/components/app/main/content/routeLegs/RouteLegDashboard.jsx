import React from 'react';
import { connect } from 'react-redux';

import { DashboardHeader } from '../common/DashboardHeader';
import { DetailsItem } from '../common/DetailsItem';

import { RouteLegs } from './RouteLegs';
import { RouteMap } from './RouteMap';
import { getFullPathImage } from '../../../utils/ImageDetails';

import './RouteDashboard.scss';

class RouteLegDashboard extends React.Component {

    render() {

        const { fetching, routeLeg, category } = this.props;

        if(fetching) {
            return (
                <div className='RouteLegDashboard'></div>
            );
        }

        let routeLegName = routeLeg.route.name + ' Leg: ' + routeLeg.number

        return (
            <div className='RouteLegDashboard'>
                <DashboardHeader title={routeLegName} icon={category.icon} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
       fetching: state.routeLegsMain.route.fetching,
       routeLeg: state.routeLegsMain.routeLeg.item,
       category: state.categories.categories.find(x => x.name === "RouteLegs")
    };
};

export default connect(mapStateToProps)(RouteLegDashboard)
