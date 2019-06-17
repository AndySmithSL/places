import React from 'react';
import { connect } from 'react-redux';

import { ICON_PATH, ICON_MAP } from '../../../utils/Global';
import { PlaceHeader } from './PlaceHeader';
import PlaceLinks from './PlaceLinks';
import { PlaceDetails } from './PlaceDetails';
import { PlaceMap } from './PlaceMap';

import './PlaceDashboard.scss';

class PlaceDashboard extends React.Component {

    render() {

        const { fetching, item } = this.props;

        if(fetching) {
            return (
                <div className="PlaceDashboard">
                    LOADING...
                </div>
            );
        }

        return (
            <div className="PlaceDashboard">
                <PlaceHeader place={item} />
                <PlaceLinks />

                <div className="row">
                    <div className="row third">
                        <PlaceDetails item={item} />
                    </div>
                    <div className="row twothirds">
                        <PlaceMap place={item} label='Map' icon={ICON_PATH + ICON_MAP} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.places.place.fetching,
        item: state.places.place.item
    };
};

export default connect(mapStateToProps)(PlaceDashboard)
