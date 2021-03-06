import {Component, OnInit, OnDestroy, Renderer2} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HandleSubscription } from '../../helpers/handle-subscriptions';
import {Journey} from '../../models/journey.model';
import {animate, keyframes, state, style, transition, trigger, sequence, query, stagger} from "@angular/animations";

@Component({
  selector: 'app-journey-details',
  templateUrl: './journey-details.component.html',
  styleUrls: ['./journey-details.component.scss'],
  animations: [
    trigger('imageAnimation', [
      transition('* => *', [
        query('.landscape', style({transform: 'translateX(0)', width: '100vw' })),

        query('.landscape', [
          animate('2s 1s cubic-bezier(.64,.15,.41,.92)', keyframes([
            style({offset: 0.2}),
            style({transform: 'translateX(0)', width: 'calc(55vw - 60px)', offset: 1})
          ]))
        ])
      ])
    ]),

    trigger('sightseeingBox', [
      transition('* => *', [
        query('.sightseeing', style({transform: 'translateY(35vh)'})),

        query('.sightseeing', [
          animate('1.2s 3.2s cubic-bezier(.64,.15,.41,.92)', style({transform: 'translateY(0)'}))
        ])
      ])
    ]),

    trigger('moreBox', [
      transition('* => *', [
        query('.more', style({transform: 'translateY(25vh)'})),

        query('.more', [
          animate('1.6s 3.3s cubic-bezier(.64,.15,.41,.92)', style({transform: 'translateY(0)'}))
        ])
      ])
    ]),

    trigger('content', [
      transition('* => *', [
        query('.content', style({opacity: 0, transform: 'translateX(-200px)'})),

        query('.content', [
          animate('0.9s 3s cubic-bezier(.64,.15,.41,.92)', style({opacity: 1, transform: 'translateX(0)'}))
        ])
      ])
    ]),

    trigger('revealAndHide', [
      transition('* => *', [
        query('.reveal-and-hide', style({opacity: 0})),

        query('.reveal-and-hide', [
          animate('2.8s 0.5s cubic-bezier(.64,.15,.41,.92)', keyframes([
            style({opacity: 1, offset: 0.35}),
            style({opacity: 1, offset: 0.80}),
            style({opacity: 0, offset: 1})
          ]))
        ])
      ])
    ])
  ]
})

export class JourneyDetailsComponent extends HandleSubscription implements OnInit, OnDestroy {
  journey$: Observable<any>;
  journeyName: string;
  journey: Journey;

  constructor(
    private renderer: Renderer2,
    private afs: AngularFirestore,
    private route: ActivatedRoute
  ) {
    super(null);

    const journeyNameSubscription = this.route.url.subscribe(url => {
      let name = url[1].path;
      let splitName = name.split('-');
      let finalName = splitName[0].charAt(0).toUpperCase() + splitName[0].slice(1);
      if (splitName[1]) {
        finalName = finalName + ' ' + splitName[1].charAt(0).toUpperCase() + splitName[1].slice(1)
      }
      if (splitName[2]) {
        finalName = finalName + ' ' + splitName[2].charAt(0).toUpperCase() + splitName[2].slice(1)
      }
      // this.journeyName = name.charAt(0).toUpperCase() + name.slice(1);
      // this.journeyName = name.split('-') name.charAt(0).toUpperCase() + name.slice(1);
      this.journeyName = finalName
    });

    this.journey$ = this.afs.collection('timeline', ref => ref.where('city', '==', this.journeyName)).valueChanges();
  }

  ngOnInit() {

    const journeySubscription = this.journey$.subscribe(journey => {
      this.journey = journey[0]
    })


    this.subscriptions.push(journeySubscription);
  }
}
