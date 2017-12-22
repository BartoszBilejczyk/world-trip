import { Component, Input } from '@angular/core';
import { TimelineItem } from '../../models/timeline.model';
import {TimelineService} from "../../services/timeline.service";

@Component({
  selector: 'app-timeline-navigation',
  templateUrl: './timeline-navigation.component.html',
  styleUrls: ['./timeline-navigation.component.scss']
})
export class TimelineNavigationComponent {
  @Input() timelineItems: TimelineItem[];

  constructor(
    private timelineService: TimelineService
  ) { }

  deleteTimelineItem(event, timelineItem) {
    this.timelineService.deleteTimelineItem(timelineItem)
  }
}
