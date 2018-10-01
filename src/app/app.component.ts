import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {routingAnimation} from './animations';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routingAnimation
  ]
})
export class AppComponent implements OnInit {

  posts: any[];

  constructor() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyCJACjvK4A13xuZ8KcklAPu3eO4xnGlvas',
      authDomain: 'blog-activite.firebaseapp.com',
      databaseURL: 'https://blog-activite.firebaseio.com',
      projectId: 'blog-activite',
      storageBucket: 'blog-activite.appspot.com',
      messagingSenderId: '1060258883309'
    };
    firebase.initializeApp(config);
  }


  ngOnInit() {}

  // Détecte les changements de views pour intégrer
  // des animations lors du routing
  getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state;
  }
}
