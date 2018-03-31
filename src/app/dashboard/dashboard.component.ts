import {Component, OnDestroy, OnInit} from '@angular/core';
import { GeneralService } from '../services/general.service';
import {HandleSubscription} from '../helpers/handle-subscriptions';
import * as generalActions from '../store/general/general.actions'

import * as moment from 'moment'
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends HandleSubscription implements OnInit, OnDestroy {
  generalInfo: any;
  daysLeft: number;
  budget: number;

  lineChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 15,
          autoSkip: true,
          fontColor: '#aebac7',
          fontSize: 14,
          beginAtZero: true
        }
      }],
      yAxes: [{
        gridLines: {
          color: '#eff2f4'
        },
        ticks: {
          maxTicksLimit: 10,
          padding: 20,
          fontSize: 14,
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    }
  };

  lineChartData: any = [];
  lineChartLabels: any = [];
  lineChartType = 'line';
  lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: '#1565c0',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: '#16191c',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];


  constructor(
    private generalService: GeneralService,
    private store: Store<any>
  ) {
    super(null);
  }

  ngOnInit() {
    this.store.dispatch(new generalActions.LoadGeneral(''));

    const chartDataSub = this.generalService.getGeneral().subscribe(data => {
      this.lineChartData[0] = data[0].accountState.map((state) => {
        return state.actual
      })
      this.lineChartData[1] = data[0].accountState.map((state) => {
        return state.projected
      })
      this.lineChartLabels = data[0].accountState.map((state) => {
        return moment(state.date).format('D.M.Y');
      })
    })

    const sub = this.generalService.getGeneral().subscribe(generalInfo => {
      this.generalInfo = generalInfo[0];

      const accountArray = this.generalInfo.accountState;
      this.budget = accountArray[accountArray.length - 1].projected;
    })

    this.subscriptions.push(sub);
    this.subscriptions.push(chartDataSub);

    this.daysLeft = -(moment().diff( '2021-10-30', 'days'));
  }

  // events
  chartClicked(e:any):void {
    console.log(e);
  }

  chartHovered(e:any):void {
    console.log(e);
  }
}
