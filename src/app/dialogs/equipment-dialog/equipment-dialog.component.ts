import {Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Equipment} from "../../models/equipment.model";
import {MatDialogRef} from "@angular/material";
import {UsefulService} from "../../services/useful.service";

@Component({
  selector: 'app-equipment-dialog',
  templateUrl: './equipment-dialog.component.html',
  styleUrls: ['./equipment-dialog.component.scss']
})
export class EquipmentDialogComponent {
  @ViewChild('equipmentForm') equipmentForm: NgForm;

  equipment: Equipment = {
    imageURL: '',
    link: '',
    name: '',
    price: null
  }

  constructor(
    private usefulService: UsefulService,
    public dialogRef: MatDialogRef<EquipmentDialogComponent>,
  ) { }

  onSubmit() {
    if(!this.equipmentForm.valid) {
      return
    }

    this.usefulService.addEquipment(this.equipment);
    this.dialogRef.close();
  }
}
