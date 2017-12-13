import { Injectable }    from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";
import '../rxjs-extensions';
import { Timeline } from "../models/timeline.model";

@Injectable()
export class TimelineService {
  timelineCollection: AngularFirestoreCollection<any>;
  timeline: Observable<any>;
  timelineDoc: AngularFirestoreDocument<Timeline>

  constructor(private afs: AngularFirestore) {
    this.timelineCollection = this.afs.collection('timeline')

    this.timeline = this.timelineCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data();
        console.log(data);
        data.id = a.payload.doc.id;
        return data;
      })
    })
  }

  getTimeline() {
    return this.timeline;
  }
  //
  // addTimeline(timeline) {
  //   this.timelineCollection.add(timeline)
  // }
  //
  // deleteTimeline(timeline) {
  //   this.timelineDoc = this.afs.doc(`timeline/${timeline.id}`);
  //   this.timelineDoc.delete();
  // }
  //
  // updateTimeline(timeline: Timeline) {
  //   this.timelineDoc = this.afs.doc(`timeline/${timeline.id}`);
  //   this.timelineDoc.update(timeline);
  // }

}