import {Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Visa} from "../../models/visa.model";
import {MatDialogRef} from "@angular/material";
import {UsefulService} from "../../services/useful.service";

@Component({
  selector: 'app-visa-dialog',
  templateUrl: './visa-dialog.component.html',
  styleUrls: ['./visa-dialog.component.scss']
})
export class VisaDialogComponent {
  @ViewChild('visaForm') visaForm: NgForm;

  visa: Visa = {
    difficulty: null,
    flag: '',
    country: '',
    link: '',
    price: null
  }

  constructor(
    private usefulService: UsefulService,
    public dialogRef: MatDialogRef<VisaDialogComponent>,
  ) { }

  onSubmit() {
    if(!this.visaForm.valid) {
      return
    }

    this.usefulService.addVisa(this.visa);
    this.dialogRef.close();
  }
}
