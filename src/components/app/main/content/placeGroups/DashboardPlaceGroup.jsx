import React from 'react';

import { Loading } from '../../../utils/Loading';
import { DashboardHeader } from '../common/DashboardHeader';

import '../Content.scss';

class DashboardPlaceGroup extends React.Component {

    render() {

        if(!this.props.item) {
            return <Loading />;
        }

        return (
            <div className="ContentDashboard">
                <DashboardHeader title={this.props.item.name} icon={this.props.icon} />
            </div>
        );
    }

} 

export default DashboardPlaceGroup;
