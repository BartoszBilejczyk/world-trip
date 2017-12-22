import { Component, OnInit } from '@angular/core';
import { UsefulService } from '../../services/useful.service';
import {HandleSubscription} from '../../helpers/handle-subscriptions';
import {VaccinationDialogComponent} from "../../dialogs/vaccination-dialog/vaccination-dialog.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-vaccinations',
  templateUrl: './vaccinations.component.html',
  styleUrls: ['./vaccinations.component.scss']
})
export class VaccinationsComponent extends HandleSubscription implements OnInit {
  vaccinations: any;

  constructor(
    private usefulService: UsefulService,
    public dialog: MatDialog
  ) {
    super(null);
  }

  ngOnInit() {
    const sub = this.usefulService.getVaccinations().subscribe(vaccinations => {
      this.vaccinations = vaccinations
    })

    this.subscriptions.push(sub);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(VaccinationDialogComponent);
  }

  deleteVaccination(event, vaccination) {
    this.usefulService.deleteVaccination(vaccination)
  }
}
