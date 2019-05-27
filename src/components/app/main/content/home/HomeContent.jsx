import React from 'react';
import { connect } from 'react-redux';
import { Loading } from '../../../utils/Loading';

import { fetchContinents } from '../../../../reducers/continents';
import { fetchDrives } from '../../../../reducers/drives';
import { fetchFlags } from '../../../../reducers/flags';
import { fetchPlaces } from '../../../../reducers/places';
import { fetchPlaceGroups } from '../../../../reducers/placeGroups';
import { fetchTerritories, fetchTerritory } from '../../../../reducers/territories';
import { fetchTerritoryTypes } from '../../../../reducers/territoryTypes';

import '../Content.scss';
import './HomeContent.scss';
import { HomeItem } from './HomeItem';
import HomeItems from './HomeItems';

class ContentHome extends React.Component {

    componentDidMount() {
        //this.props.fetchContinents();
        //this.props.fetchDrives();
        //this.props.fetchFlags();
        //this.props.fetchPlaces();
        // this.props.fetchPlaceGroups();
        // this.props.fetchTerritories();
        // this.props.fetchTerritoryTypes();
    }

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
                <div className="ContentMain">
                    <Loading />
                </div>
            )
        }

        const num1 = Math.floor((Math.random() * this.props.places.length) + 1);
        const place = this.props.places[num1];

        const num2 = Math.floor((Math.random() * this.props.territories.length) + 1);
        const territory = this.props.territories[num2];
    

        return (
            <div className="ContentMain">

                <HomeItems />

               
                {/* <HomeItem label="Drives:" value={this.props.drives.length} />
                <HomeItem label="Flags:" value={this.props.flags.length} />
                <HomeItem label="Places:" value={this.props.places.length} />
                <HomeItem label="Place Groups:" value={this.props.placeGroups.length} />
                <HomeItem label="Territories:" value={this.props.territories.length} />
                <HomeItem label="Territory Types:" value={this.props.territoryTypes.length} /> */}
            

                {/* <div>
                    <p>Place</p>
                    <p>{ place && place.name}</p>
                </div>
                <div>
                    <p>Territory</p>
                    <p>{ territory && territory.name}</p>
                </div> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        continents: state.continents.items,
        drives: state.drives.drives.items,
        flags: state.flags.items,
        places: state.places.items,
        placeGroups: state.placeGroups.items,
        territories: state.territories.items,
        territoryTypes: state.territoryTypes.items,
    };
};

export default connect(mapStateToProps)(ContentHome)
