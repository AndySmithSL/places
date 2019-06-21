import React from 'react';
import Chart from 'react-google-charts';

import { DetailsHeader } from '../common/DetailsHeader';

import './ContinentMap.scss';

export const ContinentMap = props => {

    const options = {
        region: props.item && props.item.code,
        resolution: 'countries',
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
    }

    let data = [];
    data.push(['Country', 'Name']);

    props.item.totalTerritories.forEach(x => {
        let item = [];
        item.push(x.isocode, x.name);
        data.push(item);
    });

    return (
        <div className='ContinentMap' >
            <DetailsHeader icon={props.icon} label={props.label} />
            <Chart className='chart' 
                    chartType='GeoChart' 
                    data={data}              
                    options={options}
                />
        </div>
    );
}
