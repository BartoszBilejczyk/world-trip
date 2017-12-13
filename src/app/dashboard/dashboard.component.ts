import { Component, OnInit } from '@angular/core';
import { GeneralService } from "../services/general.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  generalInfo: any;

  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    const sub = this.generalService.getGeneral().subscribe(generalInfo => {
      this.generalInfo = generalInfo
    })
  }

}
