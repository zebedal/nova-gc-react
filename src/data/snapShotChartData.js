
export const chartOptions = {
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
      redrawOnParentResize: true,
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
    /* title: {
      text: 'Sales for something',
      style: {
        fontSize: '12px'
      }
    }, */
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
      categories: [],
      tickPlacement: 'on',

    }
  },
  series: [
  
  ]
}


