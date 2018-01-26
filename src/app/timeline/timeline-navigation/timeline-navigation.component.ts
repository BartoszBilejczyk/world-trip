import { Component, Input } from '@angular/core';
import { TimelineItem } from '../../models/timeline.model';
import {TimelineService} from "../../services/timeline.service";
import {MatDialog} from "@angular/material";
import {TimelineItemDialogComponent} from "../../dialogs/timeline-item-dialog/timeline-item-dialog.component";

@Component({
  selector: 'app-timeline-navigation',
  templateUrl: './timeline-navigation.component.html',
  styleUrls: ['./timeline-navigation.component.scss']
})
export class TimelineNavigationComponent {
  @Input() timelineItems: TimelineItem[];

  constructor(
    private timelineService: TimelineService,
    private dialog: MatDialog
  ) { }

  deleteTimelineItem(event, timelineItem) {
    this.timelineService.deleteTimelineItem(timelineItem)
  }

  editTimelineItem(event, timelineItem) {
    const dialogRef = this.dialog.open(TimelineItemDialogComponent, {
      data: {
        timelineItem,
        isBeingUpdated: true
      }
    });
    // dialogRef.componentInstance.timelineItem = timelineItem;
    // dialogRef.componentInstance.isBeingUpdated = true;
  }
}
