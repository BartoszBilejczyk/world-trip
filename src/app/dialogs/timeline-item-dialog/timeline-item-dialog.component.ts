import {Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialogRef} from "@angular/material";
import {TimelineService} from "../../services/timeline.service";
import {TimelineItem} from "../../models/timeline.model";
import * as moment from 'moment'

@Component({
    selector: 'app-timeline-item-dialog',
    templateUrl: './timeline-item-dialog.component.html',
    styleUrls: ['./timeline-item-dialog.component.scss']
})
export class TimelineItemDialogComponent {
    @ViewChild('timelineItemForm') timelineItemForm: NgForm;

    timelineItem: TimelineItem = {
      address: 'Address',
      arrival: '',
      city: '',
      country: 'United States',
      date: '',
      departure: '',
      imageURL: 'http://lorempixel.com/400/200/sports/',
      note: 'Note',
      type: 'flight'
    }

    constructor(
        private usefulService: TimelineService,
        public dialogRef: MatDialogRef<TimelineItemDialogComponent>,
    ) { }

    onSubmit() {
        if(!this.timelineItemForm.valid) {
          console.log(this.timelineItemForm)
            return
        }

        this.timelineItem.date = this.timelineItemForm.value.date._d;
        this.usefulService.addTimelineItem(this.timelineItem);
        this.dialogRef.close();
    }
}
