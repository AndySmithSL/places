import React from 'react';

import { Loading } from '../../../utils/Loading';
import { DashboardHeader } from '../common/DashboardHeader';
import { DetailsContinent } from './DetailsContinent';
import { ChartContinent } from './ChartContinent';
import { Subdivisons } from './Subdivisions';
import { Territories } from './Territories';
import { PieChartContinent } from './PieChartContinent';

import '../Content.scss';

export const DashboardContinent = (props) => {
    
    if(!props.item) {
        return <Loading />;
    }

    return (
        <div className="ContentDashboard">
            <DashboardHeader title={props.item.name} icon={props.icon} />

            <div className="row" >
                <div className="row two-thirds">
                    <ChartContinent item={props.item} label='Map' icon='../assets/map.png' size='half' />
                    <DetailsContinent item={props.item} label='Details' icon='../assets/info.png' size='half' />
                    { props.item.children.length > 0 && <Subdivisons item={props.item} label='Subdivisons' icon='../assets/america.png' size='half' /> }         
                    { props.item.parent && <DetailsContinent item={props.item.parent} label='Parent' icon='../assets/america.png' size='half' /> } 
                    { props.item.children.length > 0 && <PieChartContinent item={props.item} label='Sub-continents' icon='../assets/map.png' size='half' /> } 
                </div>
                <div className="row third">
                    <Territories item={props.item} label='Territories' icon='../assets/passport.png' />
                </div>
            </div>
        </div>
    );
}
