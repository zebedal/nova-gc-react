
import styles from './Snapshot.module.css'
import Chart from 'react-apexcharts'
import Spinner from '../UI/Spinner'


const chartOptions = {
    options: {
        legend: {
            show: true,
            fontSize: '11px',
            labels: {
                useSeriesColors: false
            },
            markers: {
                fillColors: ['#D53FE6', '#B019C1', '#10800C', '#EB0000', '#828282']
            }
        },
      chart: {
        
        background: '#fff',
        toolbar: {
            show: true,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
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
          horizontal: true,
          barHeight: '40px',
           /*borderRadius: 20*/ 
        }
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        colors: ['#D53FE6', '#B019C1', '#10800C', '#EB0000', '#828282']
      },
      xaxis: {
        categories: ['Nova Receita', 'Refidelização'],
        tickPlacement: 'on',

      }
    },
    series: [
      {
        name: "Métrica 1",
        data: [190000, 250000]
      },
      {
        name: "Métrica 2",
        data: [30000, 60000]
      },
      {
        name: "Métrica 3",
        data: [50000, 40000]
      },
      {
        name: "Métrica 4",
        data: [25000, 50000]
      },
      {
        name: "Métrica 5",
        data: [20000, 50000]
      }
    ]
  };

  const chartOptions2= {
    options: {
        legend: {
            show: true,
            fontSize: '11px',
            labels: {
                useSeriesColors: false
            },
            markers: {
                fillColors: ['#D53FE6', '#B019C1', '#10800C', '#EB0000', '#828282']
            }
        },
      chart: {
        
        background: '#fff',
        toolbar: {
            show: true,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
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
          horizontal: true,
          barHeight: '40px',
           /*borderRadius: 20*/ 
        }
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        colors: ['#D53FE6', '#B019C1', '#10800C', '#EB0000', '#828282']
      },
      xaxis: {
        categories: ['Nova Receita', 'ICT', 'IOT'],
        tickPlacement: 'on',

      }
    },
    series: [
        
      {
        name: "Métrica 1",
        data: [150000, 150000, 150000]
      },
      {
        name: "Métrica 2",
        data: [75000, 150000, 40000]
      },
      {
        name: "Métrica 3",
        data: [75000, 50000, 30900]
      },
      {
        name: "Métrica 4",
        data: [40000, 40000, 20000]
      },
      {
        name: "Métrica 5",
        data: [20000]
      }
    ]
  };

  const chartOptions3 = {
    options: {
        legend: {
            show: true,
            fontSize: '11px',
            labels: {
                useSeriesColors: false
            },
            markers: {
                fillColors: ['#D53FE6', '#B019C1', '#10800C', '#EB0000', '#828282']
            }
        },
      chart: {
        
        background: '#fff',
        toolbar: {
            show: true,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
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
          horizontal: true,
          barHeight: '40px',
           /*borderRadius: 20*/ 
        }
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        colors: ['#D53FE6', '#B019C1', '#10800C', '#EB0000', '#828282']
      },
      xaxis: {
        categories: ['Campanha A', 'Campanha B', 'Campanha C'],
        tickPlacement: 'on',

      }
    },
    series: [
        {
          name: "Métrica 1",
          data: [75000, 150000, 150000]
        },
        {
          name: "Métrica 2",
          data: [45000, 150000, 40000]
        },
        {
          name: "Métrica 3",
          data: [150000, 50000, 30900]
        },
        {
          name: "Métrica 4",
          data: [40000, 40000, 20000]
        },
        {
          name: "Métrica 5",
          data: [20000]
        }
      ]
  };
const Snapshot = ({data}) => {


  if(!data) {
    return (
      <div className={styles.wrapper}>
        <Spinner text="A carregar dados, por favor aguarde" textColor="" />
      </div>
    )
  }

    return (
        <div className={styles.wrapper}>

            <div className={styles.column}>
                <div className={styles['header-wrapper']}>
                    <div className={styles.header}>
                        <span className={styles['big-number']}>38</span>
                        <span className={styles['header-title']}>Oportunidades de negócio</span>
                    </div>
                    <div className={styles['header-content']}>
                        <div className={styles.grid}>
                            <span></span>
                            <span className={styles['grid-title']}>VFD</span>
                            <span className={styles['grid-title']}>USER</span>
                            <span className={styles['grid-row-title']}>Nova receita</span>
                            <span className={styles['grid-row-value']}>10</span>
                            <span className={styles['grid-row-value']}>5</span>
                            <span className={styles['grid-row-title']}>Refidelização</span>
                            <span className={styles['grid-row-value']}>8</span>
                            <span className={styles['grid-row-value']}>15</span>
                        </div>
                        <div className={styles.tcv}>
                            <p><span style={{color: '#920EA1'}}>1.259.324€</span> TCV</p>
                        </div>
                    </div>
                </div>

                <div className={styles['chart-wrapper']}>
                <Chart
                    options={chartOptions.options}
                    series={chartOptions.series}
                    type="bar"
                    height="250px"
                    />
                </div>
            </div>

            <div className={styles.column}>
            <div className={styles['header-wrapper']}>
                    <div className={styles.header}>
                        <span className={styles['big-number']} style={{color:'#9C0BAC'}}>38</span>
                        <span className={styles['header-title']}>Oportunidades em curso</span>
                    </div>
                    <div className={styles['header-content']}>
                        <div className={styles.grid}>
                            <span></span>
                            <span className={styles['grid-title']}>VFD</span>
                            <span className={styles['grid-title']}>USER</span>
                            <span className={styles['grid-row-title']}>Nova receita</span>
                            <span className={styles['grid-row-value']}>10</span>
                            <span className={styles['grid-row-value']}>5</span>
                            <span className={styles['grid-row-title']}>Refidelização</span>
                            <span className={styles['grid-row-value']}>8</span>
                            <span className={styles['grid-row-value']}>15</span>
                        </div>
                        <div className={styles.tcv}>
                            <p><span style={{color: '#920EA1'}}>1.259.324€</span> TCV</p>
                        </div>
                    </div>
                </div>

                <div className={styles['chart-wrapper']}>
                <Chart
                    options={chartOptions2.options}
                    series={chartOptions2.series}
                    type="bar"
                    height="250px"
                    />
                </div>
            </div>

            <div className={styles.column}>
                <div className={styles['header-wrapper']}>
                    <div className={styles.header}>
                        <span className={styles['big-number']} style={{color: '#10800C'}}>38</span>
                        <span className={styles['header-title']}>Oportunidades c/ proposta</span>
                    </div>
                    <div className={styles['header-content']}>
                        <div className={styles.grid}>
                            <span></span>
                            <span className={styles['grid-title']}>VFD</span>
                            <span className={styles['grid-title']}>USER</span>
                            <span className={styles['grid-row-title']}>Nova receita</span>
                            <span className={`${styles['grid-row-value']} ${styles.green}`} >10</span>
                            <span className={`${styles['grid-row-value']} ${styles.green}`}>5</span>
                            <span className={styles['grid-row-title']}>Refidelização</span>
                            <span className={`${styles['grid-row-value']} ${styles.green}`}>8</span>
                            <span className={`${styles['grid-row-value']} ${styles.green}`}>15</span>
                        </div>
                        <div className={styles.tcv}>
                            <p><span style={{color: '#10800C'}}>1.259.324€</span> TCV</p>
                        </div>
                    </div>
                </div>

                <div className={styles['chart-wrapper']}>
                <Chart
                    options={chartOptions3.options}
                    series={chartOptions3.series}
                    type="bar"
                    height="250px"
                     />
                </div>
            </div>

        </div>
    )
}

export default Snapshot