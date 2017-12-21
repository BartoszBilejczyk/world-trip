import {Component, OnDestroy, OnInit} from '@angular/core';
import { GeneralService } from '../services/general.service';
import {HandleSubscription} from '../helpers/handle-subscriptions';

import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends HandleSubscription implements OnInit, OnDestroy {
  generalInfo: any;
  budgetChart: AmChart = null;
  costGaugeChart: AmChart = null;

  constructor(
    private AmCharts: AmChartsService,
    private generalService: GeneralService
  ) {
    super(null);
  }

  ngOnInit() {
    const sub = this.generalService.getGeneral().subscribe(generalInfo => {
      this.generalInfo = generalInfo[0];

      this.createBudgetChart()
      this.createCostGaugeChart()
    })

    this.subscriptions.push(sub);
  }


  createBudgetChart() {
    console.log(this.budgetChart)
    console.log(this.generalInfo.accountState)
    this.budgetChart = this.AmCharts.makeChart("budgetChart", {
      "type": "serial",
      "theme": "light",
      "marginRight": 40,
      "marginLeft": 40,
      "autoMarginOffset": 20,
      "mouseWheelZoomEnabled":true,
      "dataDateFormat": "YYYY-MM-DD",
      "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "position": "left",
        "ignoreAxisWidth":true
      }],
      "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
      },
      "graphs": [{
        "id": "g1",
        "balloon":{
          "drop":true,
          "adjustBorderColor":false,
          "color":"#fff"
        },
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#7c395c",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineColor": "#7c395c",
        "lineThickness": 3,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "actual",
        "balloonText": "<span style='font-size:13px;'>[[value]]</span>"
      },
      {
        "id": "g2",
        "balloon":{
          "drop":true,
          "adjustBorderColor":false,
          "color":"#fff",
        },
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#de9174",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineColor": "#de9174",
        "lineThickness": 3,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "projected",
        "balloonText": "<span style='font-size:13px;'>[[value]]</span>"
      }],
      "chartScrollbar": {
        "graph": "g1",
        "oppositeAxis":false,
        "offset":30,
        "scrollbarHeight": 80,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount":true,
        "color":"#AAAAAA"
      },
      "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha":1,
        "cursorColor":"#258cbb",
        "limitToGraph":"g1",
        "valueLineAlpha":0.2,
        "valueZoomable":true
      },
      "valueScrollbar":{
        "oppositeAxis":false,
        "offset":50,
        "scrollbarHeight":10
      },
      "categoryField": "date",
      "categoryAxis": {
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": true
      },
      "export": {
        "enabled": true
      },
      "dataProvider": this.generalInfo.accountState
    });

    this.budgetChart.addListener("rendered", this.zoomChart);

    this.zoomChart();
  }

  zoomChart() {
    this.budgetChart.zoomToIndexes(this.budgetChart.dataProvider.length - 40, this.budgetChart.dataProvider.length - 1);
  }

  createCostGaugeChart() {
    this.costGaugeChart = this.AmCharts.makeChart("costGaugeChart", {
      "theme": "light",
      "type": "gauge",
      "axes": [{
        "topTextFontSize": 20,
        "topTextYOffset": 70,
        "axisColor": "#de9174",
        "axisThickness": 1,
        "endValue": 100,
        "gridInside": true,
        "inside": true,
        "radius": "50%",
        "valueInterval": 10,
        "tickColor": "#4e576e",
        "startAngle": -90,
        "endAngle": 90,
        "unit": "%",
        "bandOutlineAlpha": 0,
        "bands": [{
          "color": "#663264",
          "endValue": 100,
          "innerRadius": "105%",
          "radius": "170%",
          "startValue": 0
        }]
      }],
      "arrows": [{
        "alpha": 1,
        "innerRadius": "35%",
        "nailRadius": 0,
        "radius": "170%",
        "value": 40
      }]
    });
  }

}
