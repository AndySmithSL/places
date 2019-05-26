import React from 'react';
import { connect } from 'react-redux';

import { fetchDrives, fetchDrive } from '../../../../reducers/drives';
import ListDrives from './ListDrives';
import DashboardDrive from './DashboardDrive';

import '../Content.scss';

class ContentDrives extends React.Component {

    constructor(props) {
        super(props);
        this.handleItemChange = this.handleItemChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchDrives();
    }

    handleItemChange = id => {
        this.props.fetchDrive(id);
    }

    render() {

        if(this.props.isFetching) {
            return <div>LOADING...</div>
        }

        return (
            <div className="ContentMain">
                <ListDrives handleItemChange={this.handleItemChange} icon={this.props.category.icon} />
                <DashboardDrive icon={this.props.category.icon} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.drives.fetching,
        drive: state.drives.item
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDrives: () => dispatch(fetchDrives()),
        fetchDrive: id => dispatch(fetchDrive(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContentDrives)
