import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flights-item',
  templateUrl: './flights-item.component.html',
  styleUrls: ['./flights-item.component.scss']
})
export class FlightsItemComponent implements OnInit {
  @Input() flight: Object;

  constructor() { }

  ngOnInit() {
  }

}
