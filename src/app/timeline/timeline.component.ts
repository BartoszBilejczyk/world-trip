import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../services/timeline.service';
import {HandleSubscription} from '../helpers/handle-subscriptions';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent extends HandleSubscription implements OnInit {
  timelineItems: any;

  constructor(private timelineService: TimelineService) {
    super(null);
  }

  ngOnInit() {
    const sub = this.timelineService.getTimeline().subscribe(timelineItems => {
      console.log(timelineItems)
      this.timelineItems = timelineItems
    })

    this.subscriptions.push(sub);
  }

}
