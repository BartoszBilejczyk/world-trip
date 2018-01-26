import { Component, OnInit } from '@angular/core';
import { UsefulService } from '../../services/useful.service';
import {HandleSubscription} from '../../helpers/handle-subscriptions';
import {MatDialog} from "@angular/material";
import {VisaDialogComponent} from "../../dialogs/visa-dialog/visa-dialog.component";
import {Store} from "@ngrx/store";
import {Visa} from "../../models/visa.model";
import * as usefulActions from '../../store/useful/useful.actions';

@Component({
  selector: 'app-visas',
  templateUrl: './visas.component.html',
  styleUrls: ['./visas.component.scss']
})
export class VisasComponent extends HandleSubscription implements OnInit {
  visas: Visa[];

  constructor(
    private usefulService: UsefulService,
    public dialog: MatDialog,
    private store: Store<any>
  ) {
    super(null);
  }

  ngOnInit() {
    const sub = this.store.select('state', 'useful', 'visas').subscribe(visas => {
      this.visas = visas;
    })

    if(!this.visas.length) {
      this.store.dispatch(new usefulActions.LoadVisas(''));
    }

    this.subscriptions.push(sub);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(VisaDialogComponent);
  }

  deleteVisa(event, visa) {
    this.usefulService.deleteVisa(visa)
  }

}
