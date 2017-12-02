import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";
import { AppStore } from "../store/app-store";
import { Country } from "../models/country.model";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})

export class CountriesComponent implements OnInit, OnDestroy {
  countriesObs: Observable<Country[]>;
  countries: Country[];
  sub: any;


  constructor(private store: Store<AppStore>) {
    this.countriesObs = store.select(s => s.countries);
  }

  ngOnInit() {
    this.sub = this.countriesObs.subscribe(countries => this.countries = countries);
    console.log(this.countries)
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }
}
