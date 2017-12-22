import { Component, OnInit } from '@angular/core';
import { UsefulService } from '../../services/useful.service';
import {HandleSubscription} from '../../helpers/handle-subscriptions';
import {MatDialog} from "@angular/material";
import {VisaDialogComponent} from "../../dialogs/visa-dialog/visa-dialog.component";

@Component({
  selector: 'app-visas',
  templateUrl: './visas.component.html',
  styleUrls: ['./visas.component.scss']
})
export class VisasComponent extends HandleSubscription implements OnInit {
  visas;

  constructor(
    private usefulService: UsefulService,
    public dialog: MatDialog
  ) {
    super(null);
  }

  ngOnInit() {
    const sub = this.usefulService.getVisas().subscribe(visas => {
      this.visas = [];
      this.visas = visas;
    })

    this.subscriptions.push(sub);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(VisaDialogComponent);
  }

  deleteVisa(event, visa) {
    this.usefulService.deleteVisa(visa)
  }

}
