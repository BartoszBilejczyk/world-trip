import { Injectable }    from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import '../rxjs-extensions';
import { Airbnb } from "../models/airbnb.model";

@Injectable()
export class AirbnbService {
  airbnbCollection: AngularFirestoreCollection<any>;
  airbnb: Observable<any>;
  airbnbDoc: AngularFirestoreDocument<Airbnb>

  constructor(private afs: AngularFirestore) {
    this.airbnbCollection = this.afs.collection('airbnb')

    this.airbnb = this.airbnbCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        console.log(data);
        data.id = a.payload.doc.id;
        return data;
      })
    })
  }

  getAirbnb() {
    return this.airbnb;
  }
  //
  // addAirbnb(airbnb) {
  //   this.airbnbCollection.add(airbnb)
  // }
  //
  // deleteAirbnb(airbnb) {
  //   this.airbnbDoc = this.afs.doc(`airbnb/${airbnb.id}`);
  //   this.airbnbDoc.delete();
  // }
  //
  // updateAirbnb(airbnb: Airbnb) {
  //   this.airbnbDoc = this.afs.doc(`airbnb/${airbnb.id}`);
  //   this.airbnbDoc.update(airbnb);
  // }

}
