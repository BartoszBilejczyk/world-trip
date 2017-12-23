import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../../services/timeline.service';
import {HandleSubscription} from '../../helpers/handle-subscriptions';
import {MatDialog} from "@angular/material";
import {TimelineItemDialogComponent} from "../../dialogs/timeline-item-dialog/timeline-item-dialog.component";
import {TimelineItem} from "../../models/timeline.model";

@Component({
  selector: 'app-timeline-list',
  templateUrl: './timeline-list.component.html',
  styleUrls: ['./timeline-list.component.scss']
})
export class TimelineListComponent extends HandleSubscription implements OnInit {
  timelineItems: TimelineItem[];

  constructor(
    private timelineService: TimelineService,
    private dialog: MatDialog
  ) {
    super(null);
  }

  ngOnInit() {
    const timelineSubscription = this.timelineService.getTimeline().subscribe(timelineItems => {
      this.timelineItems = timelineItems
    })

    this.subscriptions.push(timelineSubscription);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TimelineItemDialogComponent);
  }

}
