import { Component, OnInit } from '@angular/core';
import { UsefulService } from "../../services/useful.service";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  equipment: any;

  constructor(private usefulService: UsefulService) { }

  ngOnInit() {
    const sub = this.usefulService.getEquipment().subscribe(eq => {
      this.equipment = eq;
    })
  }

}
