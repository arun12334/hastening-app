import { Component, HostListener, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { RouterLink } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
declare var bootstrap: any;


@Component({
  selector: 'app-home',
  imports: [Header, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  constructor(
  private cdr: ChangeDetectorRef
) {    this.nb8821UpdateBannerImage();}




 /*==========================================================
  DESKTOP IMAGE
  ==========================================================*/

  desktopBannerImage =
  'assets/home/home-banner.png';

  /*==========================================================
  MOBILE IMAGE
  ==========================================================*/

  mobileBannerImage =
  'assets/home/home-header-mobile.png';

  /*==========================================================
  CURRENT IMAGE
  ==========================================================*/

  bannerImage = '';

  /*==========================================================
  INIT
  ==========================================================*/
 
  /*==========================================================
  WINDOW RESIZE
  ==========================================================*/

  @HostListener('window:resize')

  onResize(){

    this.nb8821UpdateBannerImage();

  }

  /*==========================================================
  CHANGE IMAGE
  ==========================================================*/

  nb8821UpdateBannerImage(){

    if(window.innerWidth <= 768){

      this.bannerImage =
      this.mobileBannerImage;

    }

    else{

      this.bannerImage =
      this.desktopBannerImage;

    }

  }



 

  ngOnInit(): void {

      this.updateCurrentDate();

  }

  currentDate: string = '';

  updateCurrentDate(): void {

  const today = new Date();

  this.currentDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

}

  


jesusMessages = [
{
title:'Peace',
image:'assets/home/jesues.jpg',
shortMessage:'My peace I give unto you.',
fullMessage:'Peace I leave with you, My peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.',
scripture:'John 14:27'
},
{
title:'Come Unto Me',
image:'assets/home/jesues.jpg',
shortMessage:'Come unto me, all ye that labour.',
fullMessage:'Come unto me, all ye that labour and are heavy laden, and I will give you rest.',
scripture:'Matthew 11:28'
},
{
title:'Light of the World',
image:'assets/home/jesues.jpg',
shortMessage:'I am the light of the world.',
fullMessage:'Whoever follows Me shall not walk in darkness, but shall have the light of life.',
scripture:'John 8:12'
}
];

messageOfTheDay = this.jesusMessages[0];

selectedJesusMessage: any = {};

openJesusMessage(): void {

    const randomIndex = Math.floor(
        Math.random() * this.jesusMessages.length
    );

    this.messageOfTheDay = this.jesusMessages[randomIndex];

    this.selectedJesusMessage = this.messageOfTheDay;

    this.cdr.detectChanges();

    const modal = new bootstrap.Modal(
        document.getElementById('jesusMessageModal')
    );

    modal.show();
}

}