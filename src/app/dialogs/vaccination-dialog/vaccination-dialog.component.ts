import {Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Vaccination} from "../../models/vaccination.model";
import {MatDialogRef} from "@angular/material";
import {UsefulService} from "../../services/useful.service";

@Component({
  selector: 'app-vaccination-dialog',
  templateUrl: './vaccination-dialog.component.html',
  styleUrls: ['./vaccination-dialog.component.scss']
})
export class VaccinationDialogComponent {
  @ViewChild('vaccinationForm') vaccinationForm: NgForm;

  vaccination: Vaccination = {
    name: '',
    link: '',
    price: null
  }

  constructor(
    private usefulService: UsefulService,
    public dialogRef: MatDialogRef<VaccinationDialogComponent>,
  ) { }

  onSubmit() {
    if(!this.vaccinationForm.valid) {
      return
    }

    this.usefulService.addVaccination(this.vaccination);
    this.dialogRef.close();
  }
}
