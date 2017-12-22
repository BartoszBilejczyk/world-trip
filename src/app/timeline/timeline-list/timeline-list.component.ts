import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../../services/timeline.service';
import {HandleSubscription} from '../../helpers/handle-subscriptions';

@Component({
  selector: 'app-timeline-list',
  templateUrl: './timeline-list.component.html',
  styleUrls: ['./timeline-list.component.scss']
})
export class TimelineListComponent extends HandleSubscription implements OnInit {
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
