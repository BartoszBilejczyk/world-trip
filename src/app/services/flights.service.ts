import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';
import '../rxjs-extensions';

@Injectable()
export class FlightsService {

  constructor(private db: AngularFireDatabase) {
  }

  getFlights(): any {
    return this.db.list('/flights').valueChanges()
  }
}
