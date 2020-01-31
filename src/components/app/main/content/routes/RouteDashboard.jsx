import React from 'react';
import { connect } from 'react-redux';

import { DashboardHeader } from '../common/DashboardHeader';
import { DetailsItem } from '../common/DetailsItem';

import { RouteLegs } from './RouteLegs';
import { RouteMap } from './RouteMap';
import { getFullPathImage } from '../../../utils/ImageDetails';

import './RouteDashboard.scss';

class RouteDashboard extends React.Component {

    render() {

        const { fetching, route, category } = this.props;

        if(fetching) {
            return (
                <div className='RouteDashboard'></div>
            );
        }

        return (
            <div className='RouteDashboard'>
                <DashboardHeader title={route.name} icon={category.icon} />
                <div className='description'>
                    <DetailsItem label='Description' value={route.description} />
                </div>
                <div className='row'>
                    <div className='row third'>
                        <RouteLegs route={route}  />
                    </div>
                    <div className="row twothirds">
                        <RouteMap route={route} label='Map' icon={getFullPathImage("world-map")} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.routes.route.fetching,
        route: state.routes.route.item,
        category: state.categories.categories.find(x => x.name === "Routes")
    };
};

export default connect(mapStateToProps)(RouteDashboard)
