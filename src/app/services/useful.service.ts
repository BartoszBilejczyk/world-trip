import { Injectable }    from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import '../rxjs-extensions';

@Injectable()
export class UsefulService {
  usefulCollection: AngularFirestoreCollection<any>;
  vaccinationsCollection: AngularFirestoreCollection<any>;
  equipment: Observable<any>;
  vaccinations: Observable<any>;
  visas: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.usefulCollection = this.afs.collection('useful');
    this.vaccinationsCollection = this.afs.collection('useful/niNijrJydxrN3QNvvBpn/vaccinations')

    this.equipment = this.usefulCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        const eq = data.equipment;
        return eq;
      })
    })

    this.visas = this.usefulCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        const visas = data.visa
        return visas;
      })
    })

    this.vaccinations = this.vaccinationsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        return data;
      })
    })

  }

  getEquipment() {
    return this.equipment;
  }
  getVisas() {
    return this.visas;
  }
  getVaccinations() {
    console.log(this.vaccinations)
    return this.vaccinations;
  }
}

