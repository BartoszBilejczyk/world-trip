import { Injectable }    from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import { Flight } from "../models/flight.model";
import '../rxjs-extensions';

@Injectable()
export class FlightsService {
  flightsCollection: AngularFirestoreCollection<Flight>;
  flights: Observable<Flight[]>;
  flightsDoc: AngularFirestoreDocument<Flight>

  constructor(private afs: AngularFirestore) {
    // this.flights = this.afs.collection('flights').valueChanges();

    this.flightsCollection = this.afs.collection('flights', ref => ref.orderBy('date', 'asc'))

    this.flights = this.flightsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Flight;
        data.id = a.payload.doc.id;
        return data;
      })
    });
  }

  getFlights() {
    return this.flights;
  }

  addFlight(flight) {
    this.flightsCollection.add(flight)
  }

  deleteFlight(flight) {
    this.flightsDoc = this.afs.doc(`flights/${flight.id}`);
    this.flightsDoc.delete();
  }

  updateFlight(flight: Flight) {
    this.flightsDoc = this.afs.doc(`flights/${flight.id}`);
    this.flightsDoc.update(flight);
  }
}
