import { Injectable }    from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';
import '../rxjs-extensions';

import { Country } from '../models/country.model';

@Injectable()
export class CountriesService {

  constructor(private db: AngularFireDatabase) {
  }

  getCountries(): any {
    return this.db.list('/countries').valueChanges();
  }

}
