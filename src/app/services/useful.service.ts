import { Injectable }    from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import '../rxjs-extensions';

@Injectable()
export class UsefulService {
  equipmentCollection: AngularFirestoreCollection<any>;
  equipment: Observable<any>;
  equipmentDoc: AngularFirestoreDocument<any>

  vaccinationsCollection: AngularFirestoreCollection<any>;
  vaccinations: Observable<any>;
  vaccinationsDoc: AngularFirestoreDocument<any>

  visasCollection: AngularFirestoreCollection<any>;
  visas: Observable<any>;
  visasDoc: AngularFirestoreDocument<any>

  constructor(private afs: AngularFirestore) {
    this.equipmentCollection = this.afs.collection('useful/equipment')
    this.vaccinationsCollection = this.afs.collection('useful/vaccinations')
    this.visasCollection = this.afs.collection('useful/visas')

    this.equipment = this.equipmentCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        console.log(data);
        data.id = a.payload.doc.id;
        return data;
      })
    })

    this.vaccinations = this.vaccinationsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        console.log(data);
        data.id = a.payload.doc.id;
        return data;
      })
    })

    this.visas = this.visasCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        console.log(data);
        data.id = a.payload.doc.id;
        return data;
      })
    })
  }

  getEquipment() {
    return this.equipment;
  }

  getVaccinations() {
    return this.vaccinations;
  }

  getVisas() {
    return this.visas;
  }
}
