import { Component, HostListener, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Header, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

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

}