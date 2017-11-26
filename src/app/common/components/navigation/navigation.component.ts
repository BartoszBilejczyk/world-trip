import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigationItems: object[] = [
    { name: 'dashboard', title: 'Dashboard'},
    { name: 'airbnb', title: 'Airbnb'},
    { name: 'costs', title: 'Costs'},
    { name: 'country', title: 'Country'},
    { name: 'flights', title: 'Flights'},
    { name: 'map', title: 'Map'},
    { name: 'timeline', title: 'Timeline'},
    { name: 'info', title: 'Useful Info'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
