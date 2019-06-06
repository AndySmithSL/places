import React from 'react';
import { connect } from 'react-redux';

import { Loading } from '../../../utils/Loading';
import ListPlaceGroups from './ListPlaceGroups';
import DashboardPlaceGroup from './DashboardPlaceGroup';

import { fetchPlaceGroups, fetchPlaceGroup } from '../../../../reducers/placeGroups';

import '../Content.scss';

class ContentPlaceGroups extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemChange = this.handleItemChange.bind(this);
    }

    componentDidMount() {
       // this.props.fetchPlaceGroups();
    }

    handleItemChange = id => {
        this.props.fetchPlaceGroup(id);
    }

    render() {

        if(this.props.fetching) {
            return <Loading />
        }

        return (
            <div className="ContentMain">
                <ListPlaceGroups handleItemChange={this.handleItemChange} icon={this.props.category.icon} />
                <DashboardPlaceGroup item={this.props.placeGroup} icon={this.props.category.icon} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.placeGroups.fetching,
        placeGroup: state.placeGroups.placeGroup
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPlaceGroups: () => dispatch(fetchPlaceGroups()),
        fetchPlaceGroup: id => dispatch(fetchPlaceGroup(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentPlaceGroups)
