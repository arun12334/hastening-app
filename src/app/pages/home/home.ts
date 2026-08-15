import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Header, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {


   bannerData = {

        id: "xd823-home-banner-yu822982",

        imageDesktop:
        "assets/home/home-banner.png",

        imageMobile:
        "assets/home/home-header.jpg",

        icon: "bi bi-heart-fill",

        titleLine1: "Come, O Thou",

        titleLine2: "King of Kings",

        subTitleOne:
        "United in Christ. Strengthened by Scripture.",

        subTitleTwo:
        "Gathered in Love.",

        highlight:
        "Hastening the Zion of God."

    }
}
