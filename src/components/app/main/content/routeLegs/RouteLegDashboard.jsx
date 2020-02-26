import React from 'react';
import { connect } from 'react-redux';

import { DashboardHeader } from '../common/DashboardHeader';
import { DetailsItem } from '../common/DetailsItem';

//import { RouteLegs } from './RouteLegs';
import { RouteLegMapContent } from './RouteLegMapContent';
import { getFullPathImage } from '../../../utils/ImageDetails';

import './RouteLegDashboard.scss';

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
                <div className='description'>
                    <DetailsItem label='Description' value={routeLeg.description} />
                </div>
                <div className='row'>
                    <div className="row twothirds">
                        <RouteLegMapContent routeLeg={routeLeg} label='Map' icon={getFullPathImage("world-map")} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
       fetching: state.routeLegsMain.routeLeg.fetching,
       routeLeg: state.routeLegsMain.routeLeg.item,
       category: state.categories.categories.find(x => x.name === "Route Legs")
    };
};

export default connect(mapStateToProps)(RouteLegDashboard)
