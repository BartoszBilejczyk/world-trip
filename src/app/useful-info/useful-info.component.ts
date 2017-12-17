import { Component, OnInit } from '@angular/core';
import { UsefulService } from "../services/useful.service";

@Component({
  selector: 'app-useful-info',
  templateUrl: './useful-info.component.html',
  styleUrls: ['./useful-info.component.scss']
})
export class UsefulInfoComponent implements OnInit {

  constructor(private usefulService: UsefulService) { }

  ngOnInit() {
  }

}
