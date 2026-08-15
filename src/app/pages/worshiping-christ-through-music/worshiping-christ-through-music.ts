import { Component } from '@angular/core';
import { Header } from '../../components/header/header';

@Component({
 selector: 'app-worshiping-christ-through-music',
  imports: [Header],
  templateUrl: './worshiping-christ-through-music.html',
  styleUrl: './worshiping-christ-through-music.scss',
})
export class WorshipingChristThroughMusic {

  //==========================================================
  // HERO BACKGROUND IMAGE
  //==========================================================
bannerImage =
'assets/worshiping/worshiping-christ-through-music-banner.png';

//==========================================================
  // HERO CONTENT
  //==========================================================

bannerData = {

  icon: 'bi bi-music-note-beamed',

  title: 'Worshiping Christ Through Music',

  subtitle: 'Unite hearts. Lift voices. Glorify the Lord.',

  description:
    'Sing unto the Lord; bless his name: shew forth his salvation from day to day.',

  scriptureReference: 'Psalm 96:2'

};



  //==========================================================
// TOP TAB MENU
//==========================================================

activeTab = 0;

bannerTabs = [

  {
    id: 0,
    icon: 'bi bi-music-note-beamed',
    title: 'Music & Worship'
  },

  {
    id: 1,
    icon: 'bi bi-people-fill',
    title: 'Choirs You Can Join'
  },

  {
    id: 2,
    icon: 'bi bi-person-fill',
    title: 'Youth Music'
  },

  {
    id: 3,
    icon: 'bi bi-calendar-event',
    title: 'Worship Events'
  },

  {
    id: 4,
    icon: 'bi bi-heart',
    title: 'My Music'
  }

];

changeTab(index:number){

    this.activeTab=index;

}

 

}