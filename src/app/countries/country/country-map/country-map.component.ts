import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";


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
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.sub = this.route.queryParams.subscribe(params => {
      this.countryName = params.country + 'Low';
      this.generateChart()
    });
  }

  generateChart = () => {
    console.log(this.countryName);
    console.log(this.chart)
    this.chart = this.AmCharts.makeChart( "chart", {
      "type": "map",
      "theme": "light",
      "dataProvider": {
        "map": this.countryName,
      },
      "areasSettings": {
        "autoZoom": true,
        "selectedColor": "#CC0000",
        "unlistedAreasColor": "#fff"
      },
      "imagesSettings": {
        "color": "#fff",
        "rollOverColor": "#fff",
        "selectedColor": "#fff",
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

  ngAfterViewInit() {
    this.generateChart();
  }
}
