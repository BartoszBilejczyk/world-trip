import { Component, OnInit } from '@angular/core';
import { GeneralService } from "../services/general.service";
import {HandleSubscription} from "../helpers/handle-subscriptions";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends HandleSubscription implements OnInit {
  generalInfo: any;

  constructor(private generalService: GeneralService) {
    super(null);
  }

  ngOnInit() {
    const sub = this.generalService.getGeneral().subscribe(generalInfo => {
      this.generalInfo = generalInfo
    })

    this.subscriptions.push(sub);
  }

}
