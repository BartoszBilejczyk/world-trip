import { Injectable }    from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import '../rxjs-extensions';

@Injectable()
export class FlightsService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private afs: AngularFirestore) {
    this.items = this.afs.collection('items').valueChanges();
  }

  getItems() {
    return this.items;
  }


  interface Item {
    id?: string;
    title?: string;
    description?: string;
  }
}
