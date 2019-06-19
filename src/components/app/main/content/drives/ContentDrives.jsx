import React from 'react';
import { connect } from 'react-redux';

import ListDrives from './ListDrives';
import DriveDashboard from './DriveDashboard';

import '../Content.scss';


class ContentDrives extends React.Component {

    render() {

        const { fetching } = this.props;

        if(fetching) {
            return (
                <div className="ContentMain">
                    LOADING...
                </div>
            );
        }

        return (
            <div className="ContentMain">
                <ListDrives />
                <DriveDashboard />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.drives.drives.fetching
    };
};

export default connect(mapStateToProps)(ContentDrives)
