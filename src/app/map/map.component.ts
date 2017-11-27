import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit, OnDestroy {
  private chart: AmChart;
  /**
   * SVG path for target icon
   */
  private targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

  /**
   * SVG path for plane icon
   */
  private planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

  constructor(
    private AmCharts: AmChartsService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  handleCountryClick = el => {
    setTimeout(() => {
      console.log(el.chart.selectedObject.title)
      let country = el.chart.selectedObject.title;
      this.router.navigate([`country/${country}`]);
    }, 1000)
  }

  ngAfterViewInit() {
    // this.router.navigate(['country'])
    this.chart = this.AmCharts.makeChart( "chartdiv", {
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
          "latitudes": [48.8567, 43.8163, 34.3, 23],
          "longitudes": [2.3510, -79.4287, -118.15, -82]
        }, {
          "id": "line2",
          "alpha": 0,
          "color": "#000000",
          "latitudes": [48.8567, 43.8163, 34.3, 23],
          "longitudes": [2.3510, -79.4287, -118.15, -82]
        }],
        "images": [{
          "svgPath": this.targetSVG,
          "title": "Paris",
          "latitude": 48.8567,
          "longitude": 2.3510
        }, {
          "svgPath": this.targetSVG,
          "title": "Toronto",
          "latitude": 43.8163,
          "longitude": -79.4287
        }, {
          "svgPath": this.targetSVG,
          "title": "Los Angeles",
          "latitude": 34.3,
          "longitude": -118.15
        }, {
          "svgPath": this.targetSVG,
          "title": "Havana",
          "latitude": 23,
          "longitude": -82
        }, {
          "svgPath": this.planeSVG,
          "positionOnLine": 0,
          "color": "#000000",
          "alpha": 0.1,
          "animateAlongLine": true,
          "lineId": "line2",
          "flipDirection": true,
          "loop": true,
          "scale": 0.03,
          "positionScale": 1.3
        }, {
          "svgPath": this.planeSVG,
          "positionOnLine": 0,
          "color": "#585869",
          "animateAlongLine": true,
          "lineId": "line1",
          "flipDirection": true,
          "loop": true,
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
      "listeners": [{
        "event": "click",
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
