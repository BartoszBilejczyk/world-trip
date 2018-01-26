import {Component, Inject, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialogRef} from "@angular/material";
import {MAT_DIALOG_DATA} from "@angular/material";
import {TimelineService} from "../../services/timeline.service";

@Component({
    selector: 'app-timeline-item-dialog',
    templateUrl: './timeline-item-dialog.component.html',
    styleUrls: ['./timeline-item-dialog.component.scss']
})
export class TimelineItemDialogComponent {
    @ViewChild('timelineItemForm') timelineItemForm: NgForm;
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
