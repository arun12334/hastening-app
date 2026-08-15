import { Component } from '@angular/core';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-sharing-our-faith',
  imports: [Header],
  templateUrl: './sharing-our-faith.html',
  styleUrl: './sharing-our-faith.scss',
})
export class SharingOurFaith {

  //==========================================================
  // HERO BACKGROUND IMAGE
  //==========================================================

 bannerImage =
'assets/sharing/sharing-our-faith-banner.png';
 


//==========================================================
  // HERO CONTENT
  //==========================================================

bannerData = {

  icon: 'bi bi-book-fill',

  title: 'Sharing Our Faith in Christ',

  subtitle: 'Strengthening disciples through testimony, worship, scripture, and sacred learning.',

  description:
    'Share the gospel of Jesus Christ with love, deepen faith through scripture, and encourage one another in righteousness.',

  scriptureReference: 'Matthew 28:19–20'

};


  //==========================================================
// TOP TAB MENU
//==========================================================

activeTab = 0;

bannerTabs = [

  {
    id: 0,
    icon: 'bi bi-person-badge-fill',
    title: 'Messages from Church Prophets'
  },

  {
    id: 1,
    icon: 'bi bi-people-fill',
    title: 'Message from Disciples'
  },

  // {
  //   id: 2,
  //   icon: 'bi bi-book',
  //   title: 'Scriptures & Book of Mormon'
  // },

  {
    id: 3,
    icon: 'bi bi-bank',
    title: 'Temple Heritage'
  },

  {
    id: 4,
    icon: 'bi bi-brightness-high',
    title: 'Daily Worship & Inspiration'
  },

  {
    id: 5,
    icon: 'bi bi-pencil-square',
    title: 'Share Your Testimony'
  }

];

changeTab(index:number){

    this.activeTab=index;

}

 

}