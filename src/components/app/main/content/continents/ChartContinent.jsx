import React from 'react';
import Chart from 'react-google-charts';

import { DetailsHeader } from '../common/DetailsHeader';

import './ChartContinent.scss';

export const ChartContinent = props => {

    const options = {
        region: props.item && props.item.code,
        resolution: 'countries',
        keepAspectRatio: false,
        backgroundColor: { stroke: 'white', fill: 'gainsboro' },
        datalessRegionColor: 'darkgray',
        defaultColor: 'darkslategray'
    }

    let className = 'ChartContinent ' + props.size;

    return (
        <div className={className} >
            <DetailsHeader icon={props.icon} label={props.label} />
            <Chart className='chart' chartType='GeoChart' data={[                    ['Country'],
                        ['Spain '],
                        ['Portugal'],
                        ['Greece'],
                        ['Italy']
                    ]}
                    options={options}
                />
        </div>
    );
}
