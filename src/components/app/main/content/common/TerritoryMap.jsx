import React from 'react';
import Chart from 'react-google-charts';

import './TerritoryMap.scss';

export const TerritoryMap = props => {

    var options = {
        region: props.item && props.item.countryIso,
        resolution: props.item && props.item.geoChartLevel,
        keepAspectRatio: false,
        //backgroundColor: 'gainsboro',
        backgroundColor: { fill: 'none' },
        datalessRegionColor: 'darkslategray',
        //datalessRegionColor: '#282c34',
        //defaultColor: 'darkslategray'
        defaultColor: 'FloralWhite',
    };

    let data = [];
    data.push(['Region', 'Name']);

    if(props.item) {
        data.push([ props.item.isocode, props.item.name ])
    }

    return (
        <div className="TerritoryMap" >
            <Chart className='chart' 
                    chartType='GeoChart' 
                    data={data}              
                    options={options}
                />
        </div>
    );
}
