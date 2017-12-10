import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";


@Component({
  selector: 'app-country-map',
  templateUrl: './country-map.component.html',
  styleUrls: ['./country-map.component.scss']
})
export class CountryMapComponent {
  // chart: AmChart;
  //
  // sub: any;
  // countryName: string;
  //
  // constructor(
  //   private AmCharts: AmChartsService,
  //   private route: ActivatedRoute,
  // ) {
  //   this.sub = this.route.paramMap.subscribe(params => {
  //     this.countryName = params.params.id + 'Low';
  //   });
  // }
  //
  // generateChart = () => {
  //   console.log(this.countryName);
  //   this.chart = this.AmCharts.makeChart( "chart", {
  //     "type": "map",
  //     "theme": "light",
  //     "dataProvider": {
  //       "map": this.countryName,
  //     },
  //     "areasSettings": {
  //       "autoZoom": true,
  //       "selectedColor": "#CC0000",
  //       "unlistedAreasColor": "#fff"
  //     },
  //     "imagesSettings": {
  //       "color": "#fff",
  //       "rollOverColor": "#fff",
  //       "selectedColor": "#fff",
  //       "pauseDuration": 0.2,
  //       "animationDuration": 2.5,
  //       "adjustAnimationSpeed": true
  //     },
  //     "linesSettings": {
  //       "color": "#fff",
  //       "alpha": 0.4
  //     },
  //     "smallMap": {},
  //     "export": {
  //       "enabled": true,
  //       "position": "bottom-right"
  //     },
  //   });
  //   console.log(this.chart)
  //
  // };
  //
  // ngOnInit() {
  //   this.generateChart();
  //   console.log('a')
  // }
  // ngOnChanges() {
  //   this.generateChart();
  //   console.log('b')
  //
  // }
  // ngAfterViewInit() {
  //   this.generateChart();
  //   console.log('c')
  //
  // }
  // ngAfterContentChecked() {
  //   this.generateChart();
  //   console.log('d')
  //
  // }
  // ngAfterViewChecked() {
  //   this.generateChart();
  //   console.log('e')
  //
  // }
  // ngOnDestroy() {
  //   if (this.chart) {
  //     this.AmCharts.destroyChart(this.chart);
  //   }
  // }
}
