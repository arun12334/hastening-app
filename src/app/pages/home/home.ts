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
) {}

  bannerData = {

    id: "xd823-home-banner-yu822982",

    imageDesktop: "assets/home/home-header.jpg",

    imageMobile: "assets/home/mobile-view.png",

    icon: "bi bi-heart-fill",

    titleLine1: "Come, O Thou",

    titleLine2: "King of Kings",

    subTitleOne: "United in Christ. Strengthened by Scripture.",

    subTitleTwo: "Gathered in Love.",

    highlight: "Hastening the Zion of God."

  };

  bannerImage: string = '';

  ngOnInit(): void {

    this.updateBannerImage();
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

  @HostListener('window:resize')
  onResize(): void {

    this.updateBannerImage();

  }

  updateBannerImage(): void {

    this.bannerImage =
      window.innerWidth <= 768
        ? this.bannerData.imageMobile
        : this.bannerData.imageDesktop;

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