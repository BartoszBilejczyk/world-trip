import { Component } from '@angular/core';
import { Store }        from '@ngrx/store';
import { Observable }   from 'rxjs/Observable';
import { Post }         from '../models/post.model';
import * as postActions from '../store/post.actions';
interface AppState {
  post: Post;
}

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})

export class CountriesComponent {
  post$: Observable<Post>;

  constructor(private store: Store<AppState>) {
    this.post$ = this.store.select('post');
  }

  getPost() {
    this.store.dispatch(new postActions.GetPost('/posts/testPost'));
  }
}
