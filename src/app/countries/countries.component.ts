import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";
import { AppStore } from "../store/app-store";
import * as countriesActions from '../store/actions/countries.actions';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})

export class CountriesComponent implements OnInit, OnDestroy {
  countriesObs: Observable<any>;
  countries = [];
  sub: any;

  constructor(private store: Store<AppStore>) {
    this.countriesObs = store.select(store => store.state.countries);
  }

  ngOnInit() {
    this.store.dispatch(new countriesActions.LoadCountries('/countries'));

    this.sub = this.countriesObs.subscribe(countries => {
      for(let country in countries) {
        console.log(country)
        this.countries.push(countries[country])
      }
    });
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }
}
