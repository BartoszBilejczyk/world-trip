import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { TimelineService } from '../../services/timeline.service';
import {HandleSubscription} from '../../helpers/handle-subscriptions';
import {MatDialog} from "@angular/material";
import {TimelineItemDialogComponent} from "../../dialogs/timeline-item-dialog/timeline-item-dialog.component";
import {TimelineItem} from "../../models/timeline.model";
import {Store} from "@ngrx/store";
import * as timelineActions from '../../store/timeline/timeline.actions';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-timeline-list',
  templateUrl: './timeline-list.component.html',
  styleUrls: ['./timeline-list.component.scss']
})
export class TimelineListComponent {
  @Input() timelineItems: TimelineItem[];

  constructor(
    private dialog: MatDialog,
  ) {
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(TimelineItemDialogComponent);
  }

}
