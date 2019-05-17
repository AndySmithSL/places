import React from 'react';

import { Loading } from '../../../utils/Loading';
import { DashboardHeader } from '../common/DashboardHeader';

import '../Content.scss';
import { DetailsContinent } from './DetailsContinent';

export const DashboardContinent = (props) => {
    
    if(!props.item) {
        return <Loading />;
    }
    
    return (
        <div className="ContentDashboard">
            <DashboardHeader title={props.item.name} icon={props.icon} />

            <div className="row" >
                <DetailsContinent item={props.item} label='Details' icon='../assets/info.png' />
                <DetailsContinent item={props.item.parent} label='Parent' icon={props.icon} />
                <DetailsContinent item={props.item} label='Details2' icon='../assets/info.png' />
            </div>



          


            
        </div>
    );
}
