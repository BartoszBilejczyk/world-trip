import {Component, Inject, Input, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialogRef} from "@angular/material";
import {MAT_DIALOG_DATA} from "@angular/material";
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
    // timelineItem: TimelineItem;
    // isBeingUpdated = false

    // timelineItem: TimelineItem = {
    //   address: 'Address',
    //   arrival: '',
    //   city: '',
    //   country: 'United States',
    //   date: '',
    //   departure: '',
    //   imageURL: 'http://lorempixel.com/400/200/sports/',
    //   note: 'Note',
    //   type: 'flight'
    // }

    constructor(
        private timelineService: TimelineService,
        public dialogRef: MatDialogRef<TimelineItemDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data
    ) {}

    onSubmit(){
      if(!this.timelineItemForm.valid) {
        return;
      }

      this.data.timelineItem.date = this.timelineItemForm.value.date._d;

      if(this.data.isBeingUpdated) {
        this.timelineService.updateTimeline(this.data.timelineItem);
      } else {
        this.timelineService.addTimelineItem(this.data.timelineItem)
      }
      this.dialogRef.close();
    }


}
