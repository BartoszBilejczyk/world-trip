import { Component, OnInit } from '@angular/core';
import { UsefulService } from '../../services/useful.service';
import { HandleSubscription } from '../../helpers/handle-subscriptions';
import { EquipmentDialogComponent } from "../../dialogs/equipment-dialog/equipment-dialog.component";
import { MatDialog } from "@angular/material";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent extends HandleSubscription implements OnInit {
  equipment: any;

  constructor(
    private usefulService: UsefulService,
    public dialog: MatDialog
  ) {
    super(null);
  }

  ngOnInit() {
    const sub = this.usefulService.getEquipment().subscribe(eq => {
      this.equipment = eq;
    })

    this.subscriptions.push(sub);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EquipmentDialogComponent);
  }

  deleteEquipment(event, equipment) {
    this.usefulService.deleteEquipment(equipment)
  }
}
