import {Component, Input, OnInit} from '@angular/core';
import { TimelineItem } from '../../models/timeline.model';

@Component({
  selector: 'app-timeline-navigation',
  templateUrl: './timeline-navigation.component.html',
  styleUrls: ['./timeline-navigation.component.scss']
})
export class TimelineNavigationComponent implements OnInit {
  @Input() timelineList: TimelineItem[];

  constructor() { }

  ngOnInit() {
  }

}
