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

class ContentHome extends React.Component {

    componentDidMount() {
        this.props.fetchContinents();
        this.props.fetchDrives();
        this.props.fetchFlags();
        this.props.fetchPlaces();
        this.props.fetchPlaceGroups();
        this.props.fetchTerritories();
        this.props.fetchTerritoryTypes();
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
                <p>Continents: {this.props.continents.length}</p>
                <p>Drives: {this.props.drives.length}</p>
                <p>Flags: {this.props.flags.length}</p>
                <p>Places: {this.props.places.length}</p>
                <p>PlaceGroups: {this.props.placeGroups.length}</p>
                <p>Territories: {this.props.territories.length}</p>
                <p>TerritoryTypes: {this.props.territoryTypes.length}</p>
                <p>Random: { Math.floor((Math.random() * 100) + 1) }</p>
                <div>
                    <p>Place</p>
                    <p>{ place && place.name}</p>
                </div>
                <div>
                    <p>Territory</p>
                    <p>{ territory && territory.name}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetchingContinents: state.continents.fetching,
        fetchingDrives: state.drives.fetching,
        fetchingFlags: state.flags.fetching,
        fetchingPlaces: state.places.fetching,
        fetchingPlaceGroups: state.placeGroups.fetching,
        fetchingTerritories: state.territories.fetching,
        fetchingTerritoryTypes: state.territoryTypes.fetching,
        continents: state.continents.items,
        drives: state.drives.items,
        flags: state.flags.items,
        places: state.places.items,
        placeGroups: state.placeGroups.items,
        territories: state.territories.items,
        territoryTypes: state.territoryTypes.items,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchContinents: () => dispatch(fetchContinents()),
        fetchDrives: () => dispatch(fetchDrives()),
        fetchFlags: () => dispatch(fetchFlags()),
        fetchPlaces: () => dispatch(fetchPlaces()),
        fetchPlaceGroups: () => dispatch(fetchPlaceGroups()),
        fetchTerritories: () => dispatch(fetchTerritories()),
        fetchTerritoryTypes: () => dispatch(fetchTerritoryTypes())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentHome)
