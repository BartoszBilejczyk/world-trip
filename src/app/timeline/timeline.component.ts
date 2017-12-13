import { Component, OnInit } from '@angular/core';
import { TimelineService } from "../services/timeline.service";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  timelineItems: any;

  constructor(private timelineService: TimelineService) { }

  ngOnInit() {
    const sub = this.timelineService.getTimeline().subscribe(timelineItems => {
      this.timelineItems = timelineItems
    })
  }

}
