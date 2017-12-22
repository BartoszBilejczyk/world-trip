import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HandleSubscription } from '../helpers/handle-subscriptions';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent extends HandleSubscription implements OnInit {
  country$: Observable<any>;
  cities: any[];
  countryName: string;

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router
  ) {
    super(null);

    const sub = this.route.url.subscribe(url => {
      const name = url[1].path
      this.countryName = name.charAt(0).toUpperCase() + name.slice(1);
    });

    this.subscriptions.push(sub);

    this.country$ = this.afs.collection('timeline', ref => ref.where('country', '==', this.countryName)).valueChanges();
  }

  ngOnInit() {
    const journeySubscription = this.country$.subscribe(cities => {
      this.cities = cities
    })
    this.subscriptions.push(journeySubscription);
  }

  getImagePath() {
    return `/assets/images/countries/${this.countryName.toLowerCase()}Low.svg`
  }
}
