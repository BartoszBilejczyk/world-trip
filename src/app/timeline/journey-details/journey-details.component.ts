import {Component, OnInit, OnDestroy, Renderer2} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HandleSubscription } from '../../helpers/handle-subscriptions';
import {Journey} from '../../models/journey.model';

@Component({
  selector: 'app-journey-details',
  templateUrl: './journey-details.component.html',
  styleUrls: ['./journey-details.component.scss']
})
export class JourneyDetailsComponent extends HandleSubscription implements OnInit, OnDestroy {
  journey$: Observable<any>;
  journeyName: string;
  journey: Journey

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private afs: AngularFirestore,
    private route: ActivatedRoute
  ) {
    super(null);

    const sub = this.route.url.subscribe(url => {
      const name = url[1].path
      this.journeyName = name.charAt(0).toUpperCase() + name.slice(1);
      console.log(this.journeyName)
    });

    this.journey$ = this.afs.collection('timeline', ref => ref.where('city', '==', this.journeyName)).valueChanges();
  }

  ngOnInit() {
    this.renderer.addClass(document.body, 'overflow-hidden');
    const journeySubscription = this.journey$.subscribe(journey => {
      this.journey = journey[0]
    })

    this.subscriptions.push(journeySubscription);
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'overflow-hidden');
  }
}
