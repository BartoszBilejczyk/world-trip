import { Injectable }    from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import '../rxjs-extensions';
import { General } from '../models/general.model';

@Injectable()
export class GeneralService {
  generalCollection: AngularFirestoreCollection<any>;
  general: Observable<any>;
  generalDoc: AngularFirestoreDocument<General>

  constructor(private afs: AngularFirestore) {
    this.generalCollection = this.afs.collection('general')

    this.general = this.generalCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        console.log(data);
        data.id = a.payload.doc.id;
        return data;
      })
    })
  }

  getGeneral() {
    return this.general;
  }
  //
  // addGeneral(general) {
  //   this.generalCollection.add(general)
  // }
  //
  // deleteGeneral(general) {
  //   this.generalDoc = this.afs.doc(`general/${general.id}`);
  //   this.generalDoc.delete();
  // }
  //
  // updateGeneral(general: General) {
  //   this.generalDoc = this.afs.doc(`general/${general.id}`);
  //   this.generalDoc.update(general);
  // }

}
