export const chartsOptions = {
    chart1: {
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
    },
    chart2:{
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
    },
    chart3: {
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
    }
    
}