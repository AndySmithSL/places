import React from 'react';
import { connect } from 'react-redux';

import { TerritoryDetails } from './TerritoryDetails';
import { TerritoryChart } from './TerritoryChart';
import { TerritoryHeader } from './TerritoryHeader';

import './TerritoryDashboard.scss';
import { TerritoryPlaces } from './TerritoryPlaces';
import { TerritoryRegions } from './TerritoryRegions';
import TerritoryLinks from './TerritoryLinks';

class DashboardTerritory extends React.Component {

    render() {

        const { fetching, item } = this.props;

        if(fetching) {
            return (
                <div className="TerritoryDashboard">
                    LOADING...
                </div>
            );
        }

        return (
            <div className="TerritoryDashboard">
                <TerritoryHeader territory={item} />
                <TerritoryLinks />
                <div className="row" >
                    <div className="third" >
                        <div classname="column">
                            <TerritoryDetails item={item} />
                            {
                                item.places.length > 0 &&
                                <div>
                                    <TerritoryPlaces territory={item} />
                                </div>
                            }
                            {
                                item.children.length > 0 &&
                                <div>
                                    <TerritoryRegions territory={item} />
                                </div>
                            }
                        </div>
                    </div>
                    <div className="two-thirds" >
                        <TerritoryChart item={item} />
                    </div>
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.territories.fetchingItem,
        item: state.territories.item,
        category: state.categories.categories.find(x => x.name === 'Territories')
    };
};

export default connect(mapStateToProps)(DashboardTerritory)
