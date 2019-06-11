import React from 'react';
import Chart from 'react-google-charts';

import { DetailsHeader } from '../common/DetailsHeader';

import './PieChart.scss';

export const PieChart = props => {

    const { data, label, icon } = props;

    var options = {
        backgroundColor: { fill: 'none' },
        chartArea: { left: 10, top: 10, bottom: 10, right: 10, width: '100%', height: '100%' },
        pieHole: 0.3,
        legend: 'none',
        pieSliceText: 'label',
        pieSliceTextStyle: {
            color: 'white',
            fontSize: 10,
            //bold: true,
        },
        //colors: ['#deeaee', '#c0ded9', '#d5f4e6'],
        colors: ['darkslategray', 'dimgray'],
        pieSliceBorderColor: 'darkgray',
        tooltip: {
            trigger: 'hover',
            textstyle: { color: 'darkslategray',
                //fontName: <string>,
                //fontSize: <number>,
                bold: true,
                //italic: <boolean> 
            },
            //showColorCode: true,
        },
        sliceVisibilityThreshold: 0.05
    };

    return (
        <div className='PieChart' >
            <DetailsHeader icon={icon} label={label} />
            <Chart className='chart' 
                    chartType='PieChart' 
                    data={data}              
                    options={options}
                />
        </div>
    );
}
