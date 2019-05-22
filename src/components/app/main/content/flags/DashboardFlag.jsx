import React from 'react';

import { Loading } from '../../../utils/Loading';
import { DashboardHeader } from '../common/DashboardHeader';

import '../Content.scss';

export const DashboardFlag = props => {

    if(!props.item) {
        return <Loading />;
    }

    return (
        <div className="ContentDashboard">
            <DashboardHeader title={props.item.name} icon={props.icon} subtitle={props.item.code} />
        </div>
    );
}
