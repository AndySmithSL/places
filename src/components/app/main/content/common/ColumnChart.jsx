import React from 'react';
import Chart from 'react-google-charts';

import { DetailsHeader } from '../common/DetailsHeader';

import './ColumnChart.scss';

function getConvertOptionsFunc(chartType) {
    return window.google && window.google.charts && window.google.charts[chartType]
      ? window.google.charts[chartType].convertOptions
      : null;
}

export default class ColumnChart extends React.Component {

    constructor(props) {
        super(props);

        const self = this;

        // this.state = {
        //     convertFunc: getConvertOptionsFunc('ColumnChart')
        // };

        // this.chartEvents = [
        //     {
        //       eventName: 'ready',
        //       callback(chart) {
        //         const convertFunc = getConvertOptionsFunc(chart) || (t => t);
        //         self.setState({ convertFunc });
        //       },
        //     },
        // ]
    }


    render() {

        var options = {
            legend: { position: 'none' },
            colors: ['#deeaee', '#c0ded9', '#d5f4e6'],
            backgroundColor: {
                fill: '#282c34',
            },
            vAxis: { 
                gridlines: { count: 0 } 
            },
            chartArea: {
                backgroundColor: {
                    fill: '#282c34'
                }
            },
        };

        const { data, label, icon } = this.props;
        //const { convertFunc } = this.state;
        //const finalOptions = convertFunc ? convertFunc(options) : options;

        return (
            <div className='ColumnChart' >
                <DetailsHeader icon={icon} label={label} />
                <Chart className='chart' 
                        chartType='ColumnChart' 
                        data={data}              
                        options={options}
                        loader={<div>LOADING CHART...</div>}
                        //chartEvents={ convertFunc ? null : this.chartEvents } 
                    />
            </div>
        );
    }
}
