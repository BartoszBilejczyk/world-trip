import { Component } from '@angular/core';
import { Store }        from '@ngrx/store';
import { Observable }   from 'rxjs/Observable';
import { Country }         from '../models/country.model';
import * as countryActions from '../store/countries.actions';

interface AppState {
  countries: Country[];
}

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})

export class CountriesComponent {
  countries$: any;

  constructor(private store: Store<AppState>) {
    this.countries$ = this.store.select('countries');
  }

  getCountries() {
    this.store.dispatch(new countryActions.GetCountries('/countries'));
    console.log(this.countries$)
  }
}
