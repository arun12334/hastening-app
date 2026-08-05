import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
 

@Component({
selector:'app-sisters-in-zion',
standalone:true,
imports:[
CommonModule
],
templateUrl:'./sisters-in-zion.html',
styleUrl:'./sisters-in-zion.scss'
})

export class SistersInZion{
constructor(private router: Router) {}

  // ==========================================
  // Header Menu
  // ==========================================

  menus = [

    {
      title: 'Home',
      icon: 'bi-house-fill',
      route: '/home'
    },

    {
      title: 'Loving Our Neighbor',
      icon: 'bi-heart-fill',
      route: '/loving-our-neighbor'
    },

    {
      title: 'Learn & Grow',
      icon: 'bi-book-fill',
      route: '/learn-grow'
    },

    {
      title: 'Community',
      icon: 'bi-people-fill',
      route: '/community'
    },

    {
      title: 'More',
      icon: 'bi-shield-check',
      route: '/more'
    }

  ];



  // ==========================================
  // Right Cards
  // ==========================================

  cards = [

    {
      title: 'Indicate a Need Request',

      desc:
        'Let the sisters know how they can support and uplift you right now.',

      icon: 'bi-hand-heart-fill',

      route: '/need-request',

      badge: ''
    },

    {
      title: 'Offer Help for a Need Request',

      desc:
        'Find needs that match your heart and offer help to bless a sister.',

      icon: 'bi-handshake',

      route: '/offer-help',

      badge: ''
    },

    {
      title: 'Post a Service Opportunity',

      desc:
        'Invite sisters to serve and request RSVPs.',

      icon: 'bi-calendar-heart',

      route: '/service-opportunity',

      badge: 'Minimum RSVPs Required'
    },

    {
      title: 'Join a Book of Mormon Study Group',

      desc:
        'Grow together in faith and understanding.',

      icon: 'bi-book',

      route: '/study-group',

      badge: 'Maximum 20 Sisters'
    }

  ];



  // ==========================================
  // Join Card
  // ==========================================

  joinInfo = {

    phone: '(+01) 248-445-2179',

    button: 'TEXT MY REQUEST TO JOIN'

  };



  // ==========================================
  // Navigation
  // ==========================================

  go(route: string) {

    this.router.navigate([route]);

  }



  // ==========================================
  // Back Button
  // ==========================================

  back() {

    history.back();

  }



  // ==========================================
  // Join Button
  // ==========================================

  joinNow() {

    alert('Join Relief Society');

  }

}