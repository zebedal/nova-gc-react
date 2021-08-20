import styles from './Pipeline.module.css'
import Card from '../../UI/Card'
import Chart from 'react-apexcharts'
import React from 'react';

const chartOptions = {
    options: {
        legend: {
            show: true,
            fontSize: '11px',
            labels: {
                useSeriesColors: false
            },
            markers: {
                fillColors: [ '#C20707', '#B019C1', '#48a700']
            }
        },
      chart: {
        fontFamily: 'montserrat-regular',
        background: '#fff',
        toolbar: {
            show: true,
            tools: {
              download: true,
              selection: false,
              zoom: false,
              zoomin: true,
              zoomout: true,
              pan: false,
              reset: true
            },
        },
        zoom: {
            enabled: true
        },
        width: "100%",
        height: 280,
        type: "bar",
        stacked: true,
      },
      title: {
        text: 'Sales for something',
        style: {
            fontSize: '12px'
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          barHeight: '40px',
           /*borderRadius: 20*/ 
        }
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        colors: ['#C20707', '#B019C1', '#48a700']
      },
      xaxis: {
        categories: ['ICT Angariação','IOT Angariação','NNIF','Nova Receita','Refidelização'],
        tickPlacement: 'on',

      }
    },
    series: [
      {
        name: "Métrica 1",
        data: [400000, 290000, 470000,210000,310000]
      },
      {
        name: "Métrica 2",
        data: [50000, 60000, 40000, 50000, 50000]
      },
      {
        name: "Métrica 3",
        data: [50000, 50000, 50000, 50000, 50000]
      }
     
    
    ]
  };

const Pipeline = props => {

   
    return (
        <div className={styles.wrapper}>
            <h5>O meu pipeline</h5>
            <p className="subtitle">Informação relativa ao meu awesome pipeline</p>
            <Card >
                <div  className={styles.chartdiv} >
                <Chart
                    options={chartOptions.options}
                    series={chartOptions.series}
                    type="bar"
                    height="250px"
                    
                    />
                </div>
            </Card>
        </div>
    )
}


export default Pipeline