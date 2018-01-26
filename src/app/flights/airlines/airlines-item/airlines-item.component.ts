import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-airlines-item',
  templateUrl: './airlines-item.component.html',
  styleUrls: ['./airlines-item.component.scss']
})
export class AirlinesItemComponent implements OnInit {
  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }

}
