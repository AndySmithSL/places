import React from 'react';
import { connect } from 'react-redux';
import { Loading } from '../../../utils/Loading';
import HomeItems from './HomeItems';

import '../Content.scss';
import './HomeContent.scss';
import { HomeFeaturedItems } from './HomeFeaturedItems';

class HomeContent extends React.Component {

    render() {

        if((this.props.fetchingContinents) ||
            (this.props.fetchingDrives) ||
            (this.props.fetchingFlags) ||
            (this.props.fetchingPlaces) ||
            (this.props.fetchingPlaceGroups) ||
            (this.props.fetchingTerritories) ||
            (this.props.fetchingTerritoryTypes)
            ) {
            return (
                <div className="HomeContent">
                    <Loading />
                </div>
            )
        }

        const num1 = Math.floor((Math.random() * this.props.places.length) + 1);
        const place = this.props.places[num1];

        const num2 = Math.floor((Math.random() * this.props.territories.length) + 1);
        const territory = this.props.territories[num2];
    

        return (
            <div className="HomeContent">
                <div>
                    <HomeItems />
                </div>
                <div>
                    <HomeFeaturedItems />
                </div>
                <div>
                    <div>
                        <p>Place</p>
                        <p>{ place && place.name}</p>
                    </div>
                    <div>
                        <p>Territory</p>
                        <p>{ territory && territory.name}</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        continents: state.continents.items,
        drives: state.drives.drives.items,
        flags: state.flags.items,
        places: state.places.places.items,
        placeGroups: state.placeGroups.items,
        territories: state.territories.items,
        territoryTypes: state.territoryTypes.items,
    };
};

export default connect(mapStateToProps)(HomeContent)
