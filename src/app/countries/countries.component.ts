import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { AngularFireList} from "angularfire2/database";
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})

export class CountriesComponent implements OnInit {
  items: AngularFireList<any[]>;
  state: any;


  constructor(private firebaseService: FirebaseService,
              private store: Store<any>) {
    const sub  = store.select('state').subscribe(state => {
      this.state = state;
    })
    console.log(this.state);
  }

  ngOnInit() {
    this.items = this.firebaseService.get().valueChanges()
    console.log(this.items)
  }
}
