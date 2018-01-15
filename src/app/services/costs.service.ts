import { Injectable }    from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import '../rxjs-extensions';

@Injectable()
export class CostsService {
  flightsCollection: AngularFirestoreCollection<any>;
  timelineCollection: AngularFirestoreCollection<any>;
  vaccinationsCollection: AngularFirestoreCollection<any>;
  equipmentCollection: AngularFirestoreCollection<any>;
  visasCollection: AngularFirestoreCollection<any>;

  flights: Observable<any[]>;
  timeline: Observable<any[]>;
  equipment: Observable<any>;
  vaccinations: Observable<any>;
  visas: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.flightsCollection = this.afs.collection('flights');
    this.timelineCollection = this.afs.collection('timeline');
    this.vaccinationsCollection = this.afs.collection('useful/niNijrJydxrN3QNvvBpn/vaccinations');
    this.equipmentCollection = this.afs.collection('useful/niNijrJydxrN3QNvvBpn/equipment');
    this.visasCollection = this.afs.collection('useful/niNijrJydxrN3QNvvBpn/visas');

    this.flights = this.flightsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      })
    });

    this.timeline = this.timelineCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      })
    });

    this.equipment = this.equipmentCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      })
    });

    this.visas = this.visasCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      })
    });

    this.vaccinations = this.vaccinationsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return data;
      })
    })

  }

  getFlights() {
    return this.flights
  }

  getTimeline() {
    return this.timeline
  }

  getEquipment() {
    return this.equipment
  }

  getVisas() {
    return this.visas
  }

  getVaccinations() {
    return this.vaccinations
  }
}
