import { Component, OnInit } from '@angular/core';
import { UsefulService } from "../../services/useful.service";

@Component({
  selector: 'app-vaccinations',
  templateUrl: './vaccinations.component.html',
  styleUrls: ['./vaccinations.component.scss']
})
export class VaccinationsComponent implements OnInit {
  vaccinations: any;

  constructor(private usefulService: UsefulService) { }

  ngOnInit() {
    const sub = this.usefulService.getVaccinations().subscribe(vaccinations => {
      this.vaccinations = vaccinations;
    })
  }

}
