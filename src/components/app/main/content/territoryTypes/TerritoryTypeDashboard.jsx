import React from 'react';
import { connect } from 'react-redux';


import { DashboardHeader } from '../common/DashboardHeader';
import { TerritoryTypeTerritories } from './TerritoryTypeTerritories';

import './TerritoryTypeDashboard.scss';

class TerritoryTypeDashboard extends React.Component {

    render() {

        const { fetching, territoryType, category } = this.props;

        if(fetching) {
            return (
                <div className='TerritoryTypeDashboard'></div>
            );
        }

        return (
            <div className='TerritoryTypeDashboard'>
                <DashboardHeader title={territoryType.type} icon={category.icon} />
                <div className='row'>
                    <div className='row whole'>
                        <TerritoryTypeTerritories territoryType={territoryType} />

                        {/* <PlaceGroupPlaces placeGroup={item} /> */}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.territoryTypes.territoryType.fetching,
        territoryType: state.territoryTypes.territoryType.item,
        category: state.categories.categories.find(x => x.name === 'Territory Types')
    };
};

export default connect(mapStateToProps)(TerritoryTypeDashboard)
