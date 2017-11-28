import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countriesObservable: Observable<any[>

  constructor(private db: AngularFireDatabase) {

  }

  ngOnInit() {
    this.countriesObservable = this.getCountries('/countries')
  }

  getCountries(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}
