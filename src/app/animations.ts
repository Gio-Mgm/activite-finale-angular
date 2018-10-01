import {animate, group, query, style, transition, trigger} from '@angular/animations';

// Création de l'animation

export const routingAnimation =
  trigger('routingAnimation', [
  transition('posts => newPost', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }),
      { optional: true }),
    group([  // block executes in parallel
      query(':enter', [
        style({ transform: 'translateX(100%)', opacity: -2 }),
        animate('0.5s ease-in-out',
          style({ transform: 'translateX(0%)', opacity: 1 }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)', opacity: 1 }),
        animate('0.5s ease-in-out',
          style({ transform: 'translateX(-100%)', opacity: -2 }))
      ], { optional: true }),
    ])
  ]),
    transition('newPost => posts', [
      query(':enter, :leave', style({ position: 'fixed', width: '100%' }),
        { optional: true }),
      group([  // block executes in parallel
        query(':enter', [
          style({ transform: 'translateX(-100%)', opacity: -2 }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateX(0%)', opacity: 1 }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)', opacity: 1 }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateX(100%)', opacity: -2 }))
        ], { optional: true }),
      ])
    ])
])
