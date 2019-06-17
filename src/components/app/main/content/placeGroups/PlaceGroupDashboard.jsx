import React from 'react';
import { connect } from 'react-redux';

import { PlaceGroupHeader } from './PlaceGroupHeader';
import { PlaceGroupPlaces } from './PlaceGroupPlaces';

import './PlaceGroupDashboard.scss';

class PlaceGroupDashboard extends React.Component {

    render() {

        const { fetching, item } = this.props;

        if(fetching) {
            return (
                <div className="PlaceGroupDashboard">
                    LOADING...
                </div>
            );
        }

        return (
            <div className="PlaceGroupDashboard">
                <PlaceGroupHeader placeGroup={item} />
    
                <div className="row">
                    <div className="row whole">
                        <PlaceGroupPlaces placeGroup={item} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.placeGroups.fetching,
        item: state.placeGroups.placeGroup,
    };
};

export default connect(mapStateToProps)(PlaceGroupDashboard)
