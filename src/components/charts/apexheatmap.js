import React, { Component } from 'react'
import Chart from 'react-apexcharts'

export default class ApexHeatMap extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [
            {
              name: "2017",
              data: [{
                x: 'W1',
                y: 22
              }, {
                x: 'W2',
                y: 29
              }, {
                x: 'W3',
                y: 13
              }, {
                x: 'W4',
                y: 32
              }, {
                x: 'W5',
                y: 32
              }, {
                x: 'W6',
                y: 39
              }, {
                x: 'W7',
                y: 39
              }, {
                x: 'W8',
                y: 39
              }, {
                x: 'W9',
                y: 39
              }, {
                x: 'W10',
                y: 39
              }, {
                x: 'W11',
                y: 39
              }]
            },
            {
              name: "2018",
              data: [{
                x: 'W1',
                y: 43
              }, {
                x: 'W2',
                y: 43
              }, {
                x: 'W3',
                y: 43
              }, {
                x: 'W4',
                y: 43
              }]
            }, 
            {
                name: "2018",
                data: [{
                  x: 'W1',
                  y: 34
                }, {
                  x: 'W2',
                  y: 73
                }, {
                  x: 'W3',
                  y: 50
                }, {
                  x: 'W4',
                  y:33
                }]
            },
            {
                name: "2019",
                data: [{
                  x: 'W1',
                  y: 35
                }, {
                  x: 'W2',
                  y: 66
                }, {
                  x: 'W3',
                  y: 33
                }, {
                  x: 'W4',
                  y:77
                }]
            }, 
          ],
        options: {
          chart: {
            height: 350,
            type: 'heatmap'
          },
          dataLabels: {
            enabled: false
          },
          plotOptions: {
            heatmap: {
              colorScale: {
                inverse: true
              }
            }
          },
          colors: ["#F3B415", "#F27036", "#663F59", "#6A6E94", "#4E88B4", "#00A7C6", "#18D8D8", '#A9D794',
            '#46AF78', '#A93F55', '#8C5E58', '#2176FF', '#33A1FD', '#7A918D', '#BAFF29'
          ],
          xaxis: {
            type: 'category',
            categories: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12', 'W13', 'W14', 'W15']
          },
          title: {
            text: 'Color Scales flipped Vertically'
          },
        },
      
      
      };
    }

    render() {
        return (
            <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="heatmap" height={350} />
            </div> 
        );
    }
}
