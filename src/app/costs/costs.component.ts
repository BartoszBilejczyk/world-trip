import { Component, OnInit, OnDestroy } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.scss']
})
export class CostsComponent implements OnInit, OnDestroy {
  private allCostChart: AmChart
  private xCostChart: AmChart;
  private xCostChart2: AmChart;
  private xCostChart3: AmChart;

  constructor(private AmCharts: AmChartsService) {
  }

  ngOnInit() {
    this.allCostChart = this.AmCharts.makeChart('allCostChart', {
      "type": "pie",
      "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
      "labelText": "",
      "alpha": 0.85,
      "maxLabelWidth": 164,
      "outlineAlpha": 0,
      "outlineThickness": 0,
      "tabIndex": 31,
      "valueField": "litres",
      "fontSize": 12,
      "handDrawScatter": 0,
      "handDrawThickness": 0,
      "processCount": 1045,
      "theme": "light",
      "startDuration": 0,
      "allLabels": [],
      "balloon": {},
      "titles": [],
      "dataProvider": [
        {
          "country": "Ireland",
          "litres": 131.1
        },
        {
          "country": "Germany",
          "litres": 115.8
        },
        {
          "country": "Australia",
          "litres": 109.9
        },
        {
          "country": "Austria",
          "litres": 108.3
        },
        {
          "country": "UK",
          "litres": 65
        },
        {
          "country": "Belgium",
          "litres": "20"
        }
      ]
    });

    this.xCostChart = this.AmCharts.makeChart("xCostChart", {
      "type": "pie",
      "marginBottom": 40,
      "allLabels": [{
        "x": "50%",
        "y": "35%",
        "text": "72.5%",
        "size": 28,
        "align": "middle",
        "color": "#555"
      }],
      "dataProvider": [{
        "value": 72.5,
        "color": "#268298"
      }, {
        "value": 27.5,
        "color": "#d3d7dc"
      }],
      "startDuration": 0,
      "colorField": "color",
      "valueField": "value",
      "labelRadius": -130,
      "pullOutRadius": 0,
      "innerRadius": "85%",
      "labelText": "",
      "balloonText": ""
    });


    this.xCostChart2 = this.AmCharts.makeChart("xCostChart2", {
      "type": "pie",
      "marginBottom": 40,
      "allLabels": [{
        "x": "50%",
        "y": "35%",
        "text": "72.5%",
        "size": 28,
        "align": "middle",
        "color": "#555"
      }],
      "dataProvider": [{
        "value": 90.5,
        "color": "#d8a487"
      }, {
        "value": 9.5,
        "color": "#d3d7dc"
      }],
      "startDuration": 0,
      "colorField": "color",
      "valueField": "value",
      "labelRadius": -130,
      "pullOutRadius": 0,
      "innerRadius": "85%",
      "labelText": "",
      "balloonText": ""
    });


    this.xCostChart3 = this.AmCharts.makeChart("xCostChart3", {
      "type": "pie",
      "marginBottom": 40,
      "allLabels": [{
        "x": "50%",
        "y": "35%",
        "text": "72.5%",
        "size": 28,
        "align": "middle",
        "color": "#555"
      }],
      "dataProvider": [{
        "value": 59.5,
        "color": "#9f3351"
      }, {
        "value": 40.5,
        "color": "#d3d7dc"
      }],
      "startDuration": 0,
      "colorField": "color",
      "valueField": "value",
      "labelRadius": -130,
      "pullOutRadius": 0,
      "innerRadius": "85%",
      "labelText": "",
      "balloonText": ""
    });

  }

  ngOnDestroy() {
    if (this.xCostChart) {
      this.AmCharts.destroyChart(this.xCostChart);
    }
    if (this.xCostChart2) {
      this.AmCharts.destroyChart(this.xCostChart2);
    }
    if (this.xCostChart3) {
      this.AmCharts.destroyChart(this.xCostChart3);
    }
  }
}
