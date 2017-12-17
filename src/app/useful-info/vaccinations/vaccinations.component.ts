import { Component, OnInit } from '@angular/core';
import { UsefulService } from "../../services/useful.service";
import {HandleSubscription} from "../../helpers/handle-subscriptions";

@Component({
  selector: 'app-vaccinations',
  templateUrl: './vaccinations.component.html',
  styleUrls: ['./vaccinations.component.scss']
})
export class VaccinationsComponent extends HandleSubscription implements OnInit {
  vaccinations: any;

  constructor(private usefulService: UsefulService) {
    super(null);
  }

  ngOnInit() {
    const sub = this.usefulService.getVaccinations().subscribe(vaccinations => {
      this.vaccinations = vaccinations
    })

    this.subscriptions.push(sub);
  }

}
