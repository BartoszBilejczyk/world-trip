import {Component, OnDestroy, OnInit} from '@angular/core';
import {HandleSubscription} from '../helpers/handle-subscriptions';
import {MatDialog} from "@angular/material";
import {TimelineItemDialogComponent} from "../dialogs/timeline-item-dialog/timeline-item-dialog.component";
import {TimelineItem} from "../models/timeline.model";
import {Store} from "@ngrx/store";
import * as timelineActions from '../store/timeline/timeline.actions';
import {Subscription} from "rxjs/Subscription";
import * as moment from 'moment'

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent extends HandleSubscription implements OnInit, OnDestroy {
  timelineItems: TimelineItem[];
  timelineSubscription: Subscription;

  constructor(
    private dialog: MatDialog,
    private store: Store<any>
  ) {
    super(null);

    this.timelineSubscription = store
      .select('state', 'timeline', 'data')
      .subscribe(timelineItems => {
        this.timelineItems = timelineItems

        this.timelineItems.forEach(item => {
          item.date = moment(item.date).format('L')
        })
      });
  }

  ngOnInit() {
    if(this.timelineItems.length == 0 ) {
      this.store.dispatch(new timelineActions.LoadTimeline(''));
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TimelineItemDialogComponent);
  }

  ngOnDestroy() {
    console.log(this.timelineSubscription)
    this.timelineSubscription.unsubscribe();
    console.log(this.timelineSubscription)
  }

}
