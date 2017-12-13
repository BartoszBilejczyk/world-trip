import { Component, OnInit } from '@angular/core';
import { UsefulService } from "../../services/useful.service";

@Component({
  selector: 'app-visas',
  templateUrl: './visas.component.html',
  styleUrls: ['./visas.component.scss']
})
export class VisasComponent implements OnInit {
  visas: any

  constructor(private usefulService: UsefulService) { }

  ngOnInit() {
    const sub = this.usefulService.getVisas().subscribe(visas => {
      this.visas = visas;
    })
  }

}
