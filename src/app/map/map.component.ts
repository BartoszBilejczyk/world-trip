import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnDestroy {
  private chart: AmChart;
  /**
   * SVG path for target icon
   */
  private targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z';
  /**
   * SVG path for plane icon
   */
  private planeSVG = 'm2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47';

  constructor(
    private AmCharts: AmChartsService,
    private router: Router,
    private ngZone: NgZone
  ) { }

  handleCountryClick = el => {
    setTimeout(() => {
      let selectedCountry = el.chart.selectedObject.title.toLowerCase();
      this.ngZone.run(() => {
        this.router.navigate([`country/${selectedCountry}`]);
      });
    }, 1200)
  };

  ngOnInit() {
    this.chart = this.AmCharts.makeChart( "worldMap", {
      "type": "map",
      "theme": "light",
      "projection": "miller",
      "dataProvider": {
        "map": "worldLow",
        "getAreasFromMap": true,
        "lines": [{
          "id": "line1",
          "arc": -0.85,
          "alpha": 0.3,
          "latitudes": [52.22, 25.205, 23.59, 25.28, -1.29, -26.20, -24.63, -26.20, 19.08,
            28.61, 27.71, 23.81, 16.86, 13.76, 11.55, 10.82, 22.40, 25.03, 31.23, 39.90,
            37.57, 35.69, 3.14, 1.35, -6.18, -8.34, 1.35, -37.81, -33.87, -43.53, -33.45, -34.60,
            -34.90, -23.55, -12.04, -0.18, 4.71, 19.43, 34.05, 37.77, 21.31,  36.17, 25.76,
            25.04, 25.76, 38.91, 40.71, 43.65, 52.22],
          "longitudes": [21.01, 55.27, 58.41, 51.53, 36.82, 28.05, 25.92, 28.05, 72.88, 77.21,
            85.32, 90.41, 96.19, 100.50, 104.89, 106.63, 114.11, 121.57, 121.47, 116.41, 126.98,
            139.69, 101.69, 103.81, 106.86, 115.09, 103.81, 144.96, 151.21, 172.63, -70.67, -58.38,
            -56.16, -46.63, -77.04, -78.47, -74.07, -99.13, -118.24, -122.42, -157.86, -115.14, -80.19,
            -77.35, -80.19, -77.04, -74.01, -79.38, 21.01]
        }, {
          "id": "line2",
          "alpha": 0,
          "color": "#000000",
          "latitudes": [52.22, 25.205, 23.59, 25.28, -1.29, -26.20, -24.63, -26.20, 19.08,
            28.61, 27.71, 23.81, 16.86, 13.76, 11.55, 10.82, 22.40, 25.03, 31.23, 39.90,
            37.57, 35.69, 3.14, 1.35, -6.18, -8.34, 1.35, -37.81, -33.87, -43.53, -33.45, -34.60,
            -34.90, -23.55, -12.04, -0.18, 4.71, 19.43, 34.05, 37.77, 21.31,  36.17, 25.76,
            25.04, 25.76, 38.91, 40.71, 43.65, 52.22],
          "longitudes": [21.01, 55.27, 58.41, 51.53, 36.82, 28.05, 25.92, 28.05, 72.88, 77.21,
            85.32, 90.41, 96.19, 100.50, 104.89, 106.63, 114.11, 121.57, 121.47, 116.41, 126.98,
            139.69, 101.69, 103.81, 106.86, 115.09, 103.81, 144.96, 151.21, 172.63, -70.67, -58.38,
            -56.16, -46.63, -77.04, -78.47, -74.07, -99.13, -118.24, -122.42, -157.86, -115.14, -80.19,
            -77.35, -80.19, -77.04, -74.01,-79.38, 21.01]
        }],
        "images": [{
          "svgPath": this.targetSVG,
          "title": "Warsaw",
          "latitude": 52.22,
          "longitude": 21.01
        }, {
          "svgPath": this.targetSVG,
          "title": "Dubai",
          "latitude": 25.205,
          "longitude": 55.27
        }, {
          "svgPath": this.targetSVG,
          "title": "Muscat",
          "latitude": 23.59,
          "longitude": 58.41
        }, {
          "svgPath": this.targetSVG,
          "title": "Doha",
          "latitude": 25.28,
          "longitude": 51.53
        }, {
          "svgPath": this.targetSVG,
          "title": "Nairobi",
          "latitude": -1.29,
          "longitude": 36.82
        }, {
          "svgPath": this.targetSVG,
          "title": "Johannesburg",
          "latitude": -26.20,
          "longitude": 28.05
        }, {
          "svgPath": this.targetSVG,
          "title": "Gaborone",
          "latitude": -24.63,
          "longitude": 25.92
        }, {
          "svgPath": this.targetSVG,
          "title": "Johannesburg",
          "latitude": -26.20,
          "longitude": 28.05
        }, {
          "svgPath": this.targetSVG,
          "title": "Bombaj",
          "latitude": 19.08,
          "longitude": 72.88
        }, {
          "svgPath": this.targetSVG,
          "title": "New Delhi",
          "latitude": 28.61,
          "longitude": 77.21
        }, {
          "svgPath": this.targetSVG,
          "title": "Katmandu",
          "latitude": 27.71,
          "longitude": 85.32
        }, {
          "svgPath": this.targetSVG,
          "title": "Dhaka",
          "latitude": 23.81,
          "longitude": 90.41
        }, {
          "svgPath": this.targetSVG,
          "title": "Rangoon",
          "latitude": 16.86,
          "longitude": 96.19
        }, {
          "svgPath": this.targetSVG,
          "title": "Bangkok",
          "latitude": 13.76,
          "longitude": 100.50
        }, {
          "svgPath": this.targetSVG,
          "title": "Phnom Penh",
          "latitude": 11.55,
          "longitude": 104.89
        }, {
          "svgPath": this.targetSVG,
          "title": "Ho Chi Minh",
          "latitude": 10.82,
          "longitude": 106.63
        }, {
          "svgPath": this.targetSVG,
          "title": "Hong Kong",
          "latitude": 22.40,
          "longitude": 114.11
        }, {
          "svgPath": this.targetSVG,
          "title": "Taipei",
          "latitude": 25.03,
          "longitude": 121.57
        }, {
          "svgPath": this.targetSVG,
          "title": "Shanghai",
          "latitude": 31.23,
          "longitude": 121.47
        }, {
          "svgPath": this.targetSVG,
          "title": "Beijing",
          "latitude": 39.90,
          "longitude": 116.41
        }, {
          "svgPath": this.targetSVG,
          "title": "Seoul",
          "latitude": 37.57,
          "longitude": 126.98
        }, {
          "svgPath": this.targetSVG,
          "title": "Tokyo",
          "latitude": 35.69,
          "longitude": 139.69
        }, {
          "svgPath": this.targetSVG,
          "title": "Kuala Lumpur",
          "latitude": 3.14,
          "longitude": 101.69
        }, {
          "svgPath": this.targetSVG,
          "title": "Singapore",
          "latitude": 1.35,
          "longitude": 103.81
        }, {
          "svgPath": this.targetSVG,
          "title": "Jakarta",
          "latitude": -6.18,
          "longitude": 106.86
        }, {
          "svgPath": this.targetSVG,
          "title": "Bali",
          "latitude": -8.34,
          "longitude": 115.09
        }, {
          "svgPath": this.targetSVG,
          "title": "Singapore",
          "latitude": 1.35,
          "longitude": 103.81
        }, {
          "svgPath": this.targetSVG,
          "title": "Melbourne",
          "latitude": -37.81,
          "longitude": 144.96
        }, {
          "svgPath": this.targetSVG,
          "title": "Sydney",
          "latitude": -33.87,
          "longitude": 151.21
        }, {
          "svgPath": this.targetSVG,
          "title": "Christchurch",
          "latitude": -43.53,
          "longitude": 172.63
        }, {
          "svgPath": this.targetSVG,
          "title": "Santiago",
          "latitude": -33.45,
          "longitude": -70.67
        }, {
          "svgPath": this.targetSVG,
          "title": "Buenos Aires",
          "latitude": -34.60,
          "longitude": -58.38
        }, {
          "svgPath": this.targetSVG,
          "title": "Montevideo",
          "latitude": -34.90,
          "longitude": -56.16
        }, {
          "svgPath": this.targetSVG,
          "title": "Sao Paulo",
          "latitude": -23.55,
          "longitude": -46.63
        }, {
          "svgPath": this.targetSVG,
          "title": "Lima",
          "latitude": -12.04,
          "longitude": -77.04
        }, {
          "svgPath": this.targetSVG,
          "title": "Quito",
          "latitude": -0.18,
          "longitude": -78.47
        }, {
          "svgPath": this.targetSVG,
          "title": "Bogota",
          "latitude": 4.71,
          "longitude": -74.07
        }, {
          "svgPath": this.targetSVG,
          "title": "Mexico City",
          "latitude": 19.43,
          "longitude": -99.13
        }, {
          "svgPath": this.targetSVG,
          "title": "Los Angeles",
          "latitude": 34.05,
          "longitude": -118.24
        }, {
          "svgPath": this.targetSVG,
          "title": "San Francisco",
          "latitude": 37.77,
          "longitude": -122.42
        }, {
          "svgPath": this.targetSVG,
          "title": "Honolulu",
          "latitude": 21.31,
          "longitude": -157.86
        }, {
          "svgPath": this.targetSVG,
          "title": "Las Vegas",
          "latitude": 36.17,
          "longitude": -115.14
        }, {
          "svgPath": this.targetSVG,
          "title": "Miami",
          "latitude": 25.76,
          "longitude": -80.19
        }, {
          "svgPath": this.targetSVG,
          "title": "Nassau",
          "latitude": 25.04,
          "longitude": -77.35
        }, {
          "svgPath": this.targetSVG,
          "title": "Miami",
          "latitude": 25.76,
          "longitude": -80.19
        }, {
          "svgPath": this.targetSVG,
          "title": "Washington",
          "latitude": 38.91,
          "longitude": -77.04
        }, {
          "svgPath": this.targetSVG,
          "title": "New York",
          "latitude": 40.71,
          "longitude": -74.01
        }, {
          "svgPath": this.targetSVG,
          "title": "Toronto",
          "latitude": 43.65,
          "longitude": -79.38
        }, {
          "svgPath": this.targetSVG,
          "title": "Warsaw",
          "latitude": 52.22,
          "longitude": 21.01
        }, {

          "svgPath": this.planeSVG,
          "positionOnLine": 0,
          "color": "#000000",
          "alpha": 0.1,
          "animateAlongLine": true,
          "lineId": "line2",
          "flipDirection": false,
          "loop": false,
          "scale": 0.03,
          "positionScale": 1.3
        }, {
          "svgPath": this.planeSVG,
          "positionOnLine": 0,
          "color": "#585869",
          "animateAlongLine": true,
          "lineId": "line1",
          "flipDirection": false,
          "loop": false,
          "scale": 0.03,
          "positionScale": 1.8
        }]
      },
      "areasSettings": {
        "autoZoom": true,
        "selectedColor": "#CC0000",
        "unlistedAreasColor": "#fff"
      },
      "imagesSettings": {
        "color": "black",
        "rollOverColor": "#fff",
        "selectedColor": "#fff",
        "pauseDuration": 0.4,
        "animationDuration": 4,
        "adjustAnimationSpeed": true
      },
      "linesSettings": {
        "color": "black",
        "alpha": 0.4
      },
      "listeners": [{
        "event": "clickMapObject",
        "method": this.handleCountryClick
      }],
      "smallMap": {},
      "export": {
        "enabled": true,
        "position": "bottom-right"
      },

    });
  };

  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }

}
