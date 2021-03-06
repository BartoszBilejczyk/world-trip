import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';


@Component({
  selector: 'app-country-map',
  templateUrl: './country-map.component.html',
  styleUrls: ['./country-map.component.scss']
})
export class CountryMapComponent {
  chart: AmChart;

  sub: any;
  countryName: string;

  constructor(
    private AmCharts: AmChartsService,
    private route: ActivatedRoute,
  ) {
    console.log(this.route)
    this.sub = this.route.params.subscribe(params => {
      this.countryName = params.id + 'Low';
    });
  }

  generateChart = () => {
    console.log(this.countryName);
    this.chart = this.AmCharts.makeChart( "countryMap", {
      "type": "map",
      "theme": "light",
      "dataProvider": {
        "map": this.countryName,
      },
      "areasSettings": {
        "autoZoom": true,
        "selectedColor": "#CC0000",
        "unlistedAreasColor": "#1565c0"
      },
      "imagesSettings": {
        "color": "#fff",
        "rollOverColor": "#1565c0",
        "selectedColor": "#1565c0",
        "pauseDuration": 0.2,
        "animationDuration": 2.5,
        "adjustAnimationSpeed": true
      },
      "linesSettings": {
        "color": "#fff",
        "alpha": 0.4
      },
      "smallMap": {},
      "export": {
        "enabled": true,
        "position": "bottom-right"
      },
    });
    console.log(this.chart)

  };

  ngOnInit() {
    this.generateChart();
  }

  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }
}
