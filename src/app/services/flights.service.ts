import { Injectable }    from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import '../rxjs-extensions';

@Injectable()
export class FlightsService {

  constructor(private db: AngularFireDatabase) {
  }

  getFlights(): any {
    return this.db.list('/flights').valueChanges()
  }
}
