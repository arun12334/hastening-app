import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-invitation-to-unity',
  standalone: true,
  imports: [CommonModule, Header],
  templateUrl: './invitation-to-unity.html',
  styleUrl: './invitation-to-unity.scss'
})
export class InvitationToUnity {

  //======================================================
  // HERO
  //======================================================

  hero = {

    background: 'assets/images/unity-banner.jpg',

    icon: 'bi-people-fill',

    title: 'Invitation to Unity',

    subtitle: 'Gathering hearts together in Christ.',

    description: 'One Body. One Spirit. One Zion.',

    verse: '"That they all may be one..."',

    reference: 'John 17:21'

  };



  //======================================================
  // LEFT CARD
  //======================================================

  believersCard = {

    title: 'Book of Mormon Believers',

    icon: 'bi-book',

    description:
      'We lovingly identify and invite all who believe in the Book of Mormon.',

    churches: [

      'The Stone Church',

      'The Church of Jesus Christ of Latter-day Saints',

      'Remnant Church',

      'Church of Christ (Temple Lot)',

      'Restoration Branches'

    ],

    footer:
      'To come together as one people in a shared priesthood covenant.',

    image: 'assets/images/believers.jpg'

  };



  //======================================================
  // COVENANT CARD
  //======================================================

  covenant = {

    title: 'Two Peoples, One Covenant',

    icon: 'bi-book-half',

    leftTitle: 'King Limhi',

    leftSubtitle: 'Land of Nephi',

    rightTitle: 'Mosiah',

    rightSubtitle: 'Land of Zarahemla',

    points: [

      'Both groups entered into covenant.',

      'Both received baptism.',

      'Both became one people.',

      'The Lord blessed them together.'

    ],

    image: 'assets/images/covenant.jpg',

    scripture: 'Mosiah 21-25'

  };



  //======================================================
  // FULFILLMENT CARD
  //======================================================

  fulfillment = {

    title: 'A Fulfillment in Our Day',

    icon: 'bi-building',

    leftTitle: 'Community of Christ',

    rightTitle: 'Church of Jesus Christ',

    message:
      'Both are walking toward Christ and seeking unity in Him.',

    image1: 'assets/images/baptism.jpg',

    image2: 'assets/images/temple.jpg'

  };



  //======================================================
  // COMMON VISION
  //======================================================

  vision = {

    title: 'We Have a Common Vision',

    icon: 'bi-star-fill',

    quote:
      '"Be one; and if ye are not one, ye are not mine."',

    items: [

      'Seek Jesus Christ',

      'Build Zion',

      'Love our Neighbor',

      'Serve Together',

      'Restore Unity',

      'Prepare for Christ'

    ],

    gallery: [

      'assets/images/gallery1.jpg',

      'assets/images/gallery2.jpg',

      'assets/images/gallery3.jpg'

    ]

  };



  //======================================================
  // LOWER GRID
  //======================================================

  lowerCards = [

    {

      title:'Two Churches',

      icon:'bi-bank',

      text:'Both groups prepared for something greater.',

      image:'assets/images/road.jpg'

    },

    {

      title:'Call to Covenant Unity',

      icon:'bi-people',

      text:'United in Priesthood, Purpose and Christ.',

      image:'assets/images/group.jpg'

    },

    {

      title:'Prophetic Promises',

      icon:'bi-megaphone',

      text:'The Gospel will be preached to every nation.',

      image:'assets/images/prophet.jpg'

    },

    {

      title:'The Work Before Us',

      icon:'bi-list-check',

      text:'Prepare the Center Stake of Zion.',

      image:'assets/images/zion.jpg'

    }

  ];



  //======================================================
  // MISSION CARD
  //======================================================

  mission = {

    title:'A New Mission Together',

    text:'Together we begin a new mission.',

    image:'assets/images/mission.jpg'

  };



  //======================================================
  // CLOSING
  //======================================================

  closing = {

    title:'Closing Declaration',

    subtitle:'Glory, Glory, Hallelujah',

    image:'assets/images/closing.jpg'

  };



  //======================================================
  // FOOTER VERSE
  //======================================================

  footer = {

    verse:
      '"Behold, how good and how pleasant it is for brethren to dwell together in unity."',

    reference:'Psalm 133:1'

  };



  //======================================================
  // SCRIPTURES
  //======================================================

  scriptures = [

    '2 Corinthians 13:11',

    '1 Peter 3:8',

    '2 Nephi 1:21',

    'Philippians 1:27',

    'D&C 45:6',

    'Mosiah 18:21',

    'Acts 4:32',

    'Moses 7:18',

    '3 Nephi 18:10',

    'John 17:20-23',

    'D&C 100:16'

  ];

}