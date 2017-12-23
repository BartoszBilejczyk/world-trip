import {Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialogRef} from "@angular/material";
import {TimelineService} from "../../services/timeline.service";
import {TimelineItem} from "../../models/timeline.model";

@Component({
    selector: 'app-timeline-item-dialog',
    templateUrl: './timeline-item-dialog.component.html',
    styleUrls: ['./timeline-item-dialog.component.scss']
})
export class TimelineItemDialogComponent {
    @ViewChild('timelineItemForm') timelineItemForm: NgForm;

    timelineItem: TimelineItem = {
      address: '',
      arrival: '',
      city: '',
      country: '',
      date: '',
      departure: '',
      imageURL: '',
      note: '',
      type: ''
    }

    constructor(
        private usefulService: TimelineService,
        public dialogRef: MatDialogRef<TimelineItemDialogComponent>,
    ) { }

    onSubmit() {
        if(!this.timelineItemForm.valid) {
            return
        }

        this.usefulService.addTimelineItem(this.timelineItem);
        this.dialogRef.close();
    }
}
