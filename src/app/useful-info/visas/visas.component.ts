import { Component, OnInit } from '@angular/core';
import { UsefulService } from "../../services/useful.service";
import {HandleSubscription} from "../../helpers/handle-subscriptions";

@Component({
  selector: 'app-visas',
  templateUrl: './visas.component.html',
  styleUrls: ['./visas.component.scss']
})
export class VisasComponent extends HandleSubscription implements OnInit {
  visas;

  constructor(private usefulService: UsefulService) {
    super(null);
  }

  ngOnInit() {
    const sub = this.usefulService.getVisas().subscribe(visas => {
      this.visas = visas;
    })

    this.subscriptions.push(sub);
  }

}
