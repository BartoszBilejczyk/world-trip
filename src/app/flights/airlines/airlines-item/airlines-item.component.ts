import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-airlines-item',
  templateUrl: './airlines-item.component.html',
  styleUrls: ['./airlines-item.component.scss']
})
export class AirlinesItemComponent {
  @Input() image: string;
}
