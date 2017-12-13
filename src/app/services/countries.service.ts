import { Injectable }    from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import '../rxjs-extensions';

@Injectable()
export class CountriesService {
  countriesCollection: AngularFirestoreCollection<any>;
  countries: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.countriesCollection = this.afs.collection('countries')

    this.countries = this.countriesCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        console.log(data);
        data.id = a.payload.doc.id;
        return data;
      })
    })
  }

  getCountries() {
    return this.countries;
  }

}
