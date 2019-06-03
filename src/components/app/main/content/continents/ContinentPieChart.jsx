import React from 'react';
import Chart from 'react-google-charts';

import { DetailsHeader } from '../common/DetailsHeader';
//import

import './ContinentPieChart.scss';

export const ContinentPieChart = props => {

    var options = {
        backgroundColor: { fill: 'none' },
        chartArea: { left: 10, top: 10, bottom: 10, right: 10, width: '100%', height: '100%' },
        pieHole: 0.3,
        legend: 'none',
        pieSliceText: 'label',
        pieSliceTextStyle: {
            color: 'black',
            fontSize: 10
        },
        colors: ['#deeaee', '#c0ded9', '#d5f4e6'],
        pieSliceBorderColor: 'darkgray',
        tooltip: {
            trigger: 'selection'
        },
        sliceVisibilityThreshold: 0.01
    };

    let data = [];
    data.push(['Sub-Continent', 'Territories']);

    props.item.children.forEach(x => {
        let item = [];
        item.push(x.name, x.territories);
        data.push(item);
    });

    return (
        <div className="ContinentPieChart" >
            <DetailsHeader icon={props.icon} label='Territories by Sub-continent' />
            <Chart className='chart' 
                    chartType='PieChart' 
                    data={data}              
                    options={options}
                />
        </div>
    );
}