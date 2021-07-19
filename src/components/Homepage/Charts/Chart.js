/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


const buildChart = () => {
/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create("chartdiv", am4charts.XYChart);

// Add percent sign to all numbers
/* chart.numberFormatter.numberFormat = "#.#'%'"; */

// Add data
chart.data = [{
    "nome": "ICT angariação",
    "actual": 300000,
    "oportunidades": 50000,
    "propostas": 30000,
    "contratos": 20000,
    "objectivo": 420000
}, {
    "nome": "IOT Angariação",
    "actual": 170000,
    "oportunidades": 50000,
    "propostas": 30000,
    "contratos": 20000,
    "objectivo": 300000
}, {
    "nome": "NNIF's",
    "actual": 290000,
    "oportunidades": 50000,
    "propostas": 30000,
    "contratos": 20000,
    "objectivo": 480000
}, {
    "nome": "Nova receita",
    "actual": 180000,
    "oportunidades": 50000,
    "propostas": 30000,
    "contratos": 20000,
    "objectivo": 230000
}, {
    "nome": "Refidelização",
    "actual": 140000,
    "oportunidades": 50000,
    "propostas": 30000,
    "contratos": 20000,
    "objectivo": 310000
}];

// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "nome";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;

let label = categoryAxis.renderer.labels.template;
label.wrap = true;
label.maxWidth = 75;

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "TCV";
valueAxis.title.fontWeight = 800;

// Create series
let series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "objectivo";
series.dataFields.categoryX = "nome";
series.clustered = false;
series.columns.template.fill = am4core.color("#606B72");
series.tooltipText = "Objectivo: [bold]{valueY}[/]";
series.tooltip.label.fontSize = 12;
series.columns.template.stroke = 'rgba(0,0,0, .1)';

let series2 = chart.series.push(new am4charts.ColumnSeries());
series2.dataFields.valueY = "objectivo";
series2.dataFields.categoryX = "nome";
series2.clustered = false;
series2.columns.template.fill = am4core.color("#c20707");
series2.columns.template.width = am4core.percent(50);
series2.tooltipText = "Contratos: [bold]{valueY}[/]";
series2.tooltip.label.fontSize = 12;
series2.columns.template.stroke = 'rgba(0,0,0, .1)';

let series3 = chart.series.push(new am4charts.ColumnSeries());
series3.dataFields.valueY = "oportunidades";
series3.dataFields.categoryX = "nome";
series3.clustered = false;
series3.columns.template.fill = am4core.color("#b24fcc");
series3.columns.template.width = am4core.percent(50);
series3.tooltipText = "Oportunidades: [bold]{valueY}[/]";
series3.tooltip.label.fontSize = 12;
series3.stacked = true;
series3.columns.template.stroke = 'rgba(0,0,0, .1)';

let series4 = chart.series.push(new am4charts.ColumnSeries());
series4.dataFields.valueY = "propostas";
series4.dataFields.categoryX = "nome";
series4.clustered = false;
series4.columns.template.fill = am4core.color("#48A700");
series4.columns.template.width = am4core.percent(50);
series4.tooltipText = "Propostas: [bold]{valueY}[/]";
series4.tooltip.label.fontSize = 12;
series4.stacked = true;
series4.columns.template.stroke = 'rgba(0,0,0, .1)';

chart.cursor = new am4charts.XYCursor();
chart.cursor.lineX.disabled = true;
chart.cursor.lineY.disabled = true;

return chart;
}

export default buildChart;

