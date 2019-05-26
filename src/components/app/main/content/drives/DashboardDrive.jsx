import React from 'react';
import { connect } from 'react-redux';

import { Loading } from '../../../utils/Loading';
import { DashboardHeader } from '../common/DashboardHeader';

import '../Content.scss';

class DashboardDrive extends React.Component {

    render() {

        if(!this.props.driveId) {
            return (
                <div className="ContentDashboard">
                    SELECT A DRIVE...
                </div>
            );
        }

        if(!this.props.drive) {
            return <Loading />;
        }

        return (
            <div className="ContentDashboard">
                <DashboardHeader title={this.props.drive.name} icon={this.props.icon} />
            </div>
        );
    }
} 

const mapStateToProps = state => {
    return {
        drive: state.drives.item,
        driveId: state.drives.id,
    };
};

// const mapDispatchToProps = dispatch => {
//     return {
//         filterDrives: filter => dispatch(filterDrives(filter))
//     };
// };

export default connect(mapStateToProps)(DashboardDrive)
