import { Component, OnInit } from '@angular/core';
import { UsefulService } from '../../services/useful.service';
import { HandleSubscription } from '../../helpers/handle-subscriptions';
import { EquipmentDialogComponent } from "../../dialogs/equipment-dialog/equipment-dialog.component";
import { MatDialog } from "@angular/material";
import {Equipment} from "../../models/equipment.model";
import {Store} from "@ngrx/store";
import * as usefulActions from '../../store/useful/useful.actions';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent extends HandleSubscription implements OnInit {
  equipment: Equipment[];

  constructor(
    private usefulService: UsefulService,
    public dialog: MatDialog,
    private store: Store<any>
  ) {
    super(null);
  }

  ngOnInit() {
    const sub = this.store.select('state', 'useful', 'equipment').subscribe(eq => {
      this.equipment = eq;
    })

    if(!this.equipment.length) {
      this.store.dispatch(new usefulActions.LoadEquipment(''));
    }

    this.subscriptions.push(sub);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EquipmentDialogComponent);
  }

  deleteEquipment(event, equipment) {
    this.usefulService.deleteEquipment(equipment)
  }
}
