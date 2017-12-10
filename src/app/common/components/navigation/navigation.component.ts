import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigationItems: object[] = [
    { name: 'dashboard', title: 'Dashboard', icon: 'dashboard'},
    { name: 'airbnb', title: 'Airbnb', icon: 'home'},
    { name: 'costs', title: 'Costs', icon: 'attach_money'},
    { name: 'countries', title: 'Countries', icon: 'room'},
    { name: 'flights', title: 'Flights', icon: 'flight_takeoff'},
    { name: 'map', title: 'Map', icon: 'map'},
    { name: 'timeline', title: 'Timeline', icon: 'timeline'},
    { name: 'info', title: 'Useful Info', icon: 'vpn_key'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
