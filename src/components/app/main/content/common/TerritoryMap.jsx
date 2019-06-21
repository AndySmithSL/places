import React from 'react';
import Chart from 'react-google-charts';

import './TerritoryMap.scss';

export const TerritoryMap = props => {

    var options = {
        region: props.item && props.item.countryIso,
        resolution: props.item && props.item.geoChartLevel,
        keepAspectRatio: false,
        displayMode: 'auto',
        enableRegionInteractivity: true,
        backgroundColor: '#282c34',
        datalessRegionColor: '#282c34',
        defaultColor: 'floralwhite',
        tooltip: {
            textStyle: {
                color: 'black',
                fontName: 'Roboto',
                fontSize: 18,
                bold: false
            }
        }
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
