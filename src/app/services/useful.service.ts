import { Injectable }    from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import '../rxjs-extensions';

@Injectable()
export class UsefulService {
  usefulCollection: AngularFirestoreCollection<any>;
  vaccinationsCollection: AngularFirestoreCollection<any>;
  equipmentCollection: AngularFirestoreCollection<any>;
  visasCollection: AngularFirestoreCollection<any>;
  vaccinationDoc: AngularFirestoreDocument<any>;
  equipmentDoc: AngularFirestoreDocument<any>;
  visaDoc: AngularFirestoreDocument<any>;
  equipment: Observable<any>;
  vaccinations: Observable<any>;
  visas: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.usefulCollection = this.afs.collection('useful');

    this.vaccinationsCollection = this.afs.collection('useful/niNijrJydxrN3QNvvBpn/vaccinations');
    this.equipmentCollection = this.afs.collection('useful/niNijrJydxrN3QNvvBpn/equipment');
    this.visasCollection = this.afs.collection('useful/niNijrJydxrN3QNvvBpn/visas');

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

  getEquipment() {
    return this.equipment;
  }

  getVisas() {
    return this.visas;
  }

  getVaccinations() {
    return this.vaccinations;
  }

  addVisa(visa) {
    this.visasCollection.add(visa)
  }

  deleteVisa(visa) {
    this.visaDoc = this.afs.doc(`useful/niNijrJydxrN3QNvvBpn/visas/${visa.id}`);
    this.visaDoc.delete();
  }

  addVaccination(vaccination) {
    this.vaccinationsCollection.add(vaccination)
  }

  deleteVaccination(vaccination) {
    console.log(vaccination);
    this.vaccinationDoc = this.afs.doc(`useful/niNijrJydxrN3QNvvBpn/vaccinations/${vaccination.id}`);
    this.vaccinationDoc.delete();
  }

  addEquipment(equipment) {
    this.equipmentCollection.add(equipment)
  }

  deleteEquipment(equipment) {
    console.log(equipment)
    this.equipmentDoc = this.afs.doc(`useful/niNijrJydxrN3QNvvBpn/equipment/${equipment.id}`);
    this.equipmentDoc.delete();
  }

}

