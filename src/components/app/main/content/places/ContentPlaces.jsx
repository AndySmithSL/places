import React from 'react';
import { connect } from 'react-redux';

import { fetchPlaces, fetchPlace } from '../../../../reducers/places';
import ListPlaces from './ListPlaces';
import { DashboardPlace } from './DashboardPlace';

import '../Content.scss';
import { Loading } from '../../../utils/Loading';

class ContentPlaces extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemChange = this.handleItemChange.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchPlaces();
    // }

    handleItemChange = id => {
        this.props.fetchPlace(id);
    }

    render() {

        if(this.props.fetching) {
            return (
                <div className="ContentMain">
                    <Loading />
                </div>
            );
        }

        return (
            <div className="ContentMain">
                <ListPlaces handleItemChange={this.handleItemChange} icon={this.props.category.icon} />
                <DashboardPlace item={this.props.place} icon={this.props.category.icon} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.places.fetching,
        place: state.places.place
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPlaces: () => dispatch(fetchPlaces()),
        fetchPlace: id => dispatch(fetchPlace(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentPlaces)
