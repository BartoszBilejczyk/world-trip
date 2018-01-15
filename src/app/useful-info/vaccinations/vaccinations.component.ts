import { Component, OnInit } from '@angular/core';
import { UsefulService } from '../../services/useful.service';
import {HandleSubscription} from '../../helpers/handle-subscriptions';
import {VaccinationDialogComponent} from "../../dialogs/vaccination-dialog/vaccination-dialog.component";
import {MatDialog} from "@angular/material";
import {Vaccination} from "../../models/vaccination.model";
import * as usefulActions from '../../store/useful/useful.actions';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-vaccinations',
  templateUrl: './vaccinations.component.html',
  styleUrls: ['./vaccinations.component.scss']
})
export class VaccinationsComponent extends HandleSubscription implements OnInit {
  vaccinations: Vaccination[];

  constructor(
    private usefulService: UsefulService,
    public dialog: MatDialog,
    private store: Store<any>
  ) {
    super(null);
  }

  ngOnInit() {
    const sub = this.store.select('state', 'useful', 'vaccinations').subscribe(vaccinations => {
      this.vaccinations = vaccinations
    })

    if(!this.vaccinations.length) {
      this.store.dispatch(new usefulActions.LoadVaccinations(''));
    }

    this.subscriptions.push(sub);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(VaccinationDialogComponent);
  }

  deleteVaccination(event, vaccination) {
    this.usefulService.deleteVaccination(vaccination)
  }
}
