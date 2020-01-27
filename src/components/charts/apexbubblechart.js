import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export default class ApexBubbleChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Product1',
          data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: 'Product2',
          data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: 'Product3',
          data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
          })
        },
        {
          name: 'Product4',
          data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
            min: 10,
            max: 60
          })
        }],
        options: {
          chart: {
            height: 350,
            type: 'bubble',
          },
          dataLabels: {
            enabled: false
          },
          fill: {
            type: 'gradient',
          },
          title: {
            text: '3D Bubble Chart'
          },
          xaxis: {
            tickAmount: 12,
            type: 'datetime',
            labels: {
                rotate: 0,
            }
          },
          yaxis: {
            max: 70
          },
          theme: {
            palette: 'palette2'
          }
        },
      
      
      };
    }

    render() {
        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="bubble" height={350} />
            </div> 
        );
    }
}