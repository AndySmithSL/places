import React from 'react';
import { connect } from 'react-redux';

import { DashboardHeader } from '../common/DashboardHeader';
import { DetailsItem } from '../common/DetailsItem';

import { DriveLegs } from './DriveLegs';
import { DriveMap } from './DriveMap';

import './DriveDashboard.scss';

class DriveDashboard extends React.Component {

    render() {

        const { fetching, drive, category } = this.props;

        if(fetching) {
            return (
                <div className='DriveDashboard'></div>
            );
        }

        return (
            <div className='DriveDashboard'>
                <DashboardHeader title={drive.name} icon={category.icon} />
                <div className='description'>
                    <DetailsItem label='Description' value={drive.description} />
                </div>
                <div className='row'>
                    <div className='row third'>
                        <DriveLegs drive={drive}  />
                    </div>
                    <div className="row twothirds">
                        <DriveMap drive={drive} /> 
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fetching: state.drives.drive.fetching,
        drive: state.drives.drive.item,
        category: state.categories.categories.find(x => x.name === "Drives")
    };
};

export default connect(mapStateToProps)(DriveDashboard)
