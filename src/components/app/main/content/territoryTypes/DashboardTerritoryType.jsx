import React from 'react';

import { Loading } from '../../../utils/Loading';

import '../Content.scss';
import { DashboardHeader } from '../common/DashboardHeader';

export const DashboardTerritoryType = props => {

    if(!props.item) {
        return <Loading />;
    }

    return (
        <div className="ContentDashboard">
            <DashboardHeader title={props.item.type} icon={props.icon} />
        </div>
    );
}
