import { Component, OnInit } from '@angular/core';
import { UsefulService } from '../../services/useful.service';
import {HandleSubscription} from '../../helpers/handle-subscriptions';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent extends HandleSubscription implements OnInit {
  equipment: any;

  constructor(private usefulService: UsefulService) {
    super(null);
  }

  ngOnInit() {
    const sub = this.usefulService.getEquipment().subscribe(eq => {
      this.equipment = eq;
    })

    this.subscriptions.push(sub);
  }

}
