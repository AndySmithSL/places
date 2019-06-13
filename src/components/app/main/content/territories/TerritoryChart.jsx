import React from 'react';
import Chart from 'react-google-charts';

import { DetailsHeader } from '../common/DetailsHeader';
import { ICON_PATH, ICON_MAP } from '../../../utils/Global';

import './TerritoryChart.scss';

export const TerritoryChart = props => {

    var options = {
        region: props.item && props.item.countryIso,
        resolution: props.item && props.item.geoChartLevel,
        keepAspectRatio: false,
        //backgroundColor: 'gainsboro',
        backgroundColor: { fill: 'none' },
        //datalessRegionColor: 'darkgray',
        datalessRegionColor: 'none',
        //defaultColor: 'darkslategray'
        defaultColor: 'darkgray',
    };

    const icon = ICON_PATH + ICON_MAP;

    let data = [];
    data.push(['Region', 'Name']);

    if(props.item) {
        data.push([ props.item.isocode, props.item.name ])
    }

    return (
        <div className="TerritoryChart" >
            <DetailsHeader icon={icon} label='Map' />
            <Chart className='chart' 
                    chartType='GeoChart' 
                    data={data}              
                    options={options}
                />
        </div>
    );
}
