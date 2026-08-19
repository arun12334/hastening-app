import { Header } from '../../components/header/header';
import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitation-to-unity',
  standalone: true,
  imports: [Header, CommonModule],
  templateUrl: './invitation-to-unity.html',
  styleUrl: './invitation-to-unity.scss',
})
export class InvitationToUnity {

/*==========================================================
INVITATION TO UNITY BANNER IMAGE X94
==========================================================*/

invitationToUnityBannerImageX94 =
'assets/invitation/invitation-to-unity-banner.png';





 /*==========================================================
  DESKTOP IMAGE
  ==========================================================*/

  desktopBannerImage =
  'assets/invitation/invitation-to-unity-banner.png';

  /*==========================================================
  MOBILE IMAGE
  ==========================================================*/

  mobileBannerImage =
  'assets/invitation/invitation-to-unity-mobile-banner.png';

  /*==========================================================
  CURRENT IMAGE
  ==========================================================*/

  bannerImage = '';

  /*==========================================================
  INIT
  ==========================================================*/

  ngOnInit(){

    this.nb8821UpdateBannerImage();

  }

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


  //==========================================================
  // HERO CONTENT
  //==========================================================

  bannerData = {

  icon:'bi bi-people-fill',

  title:'Invitation to Unity',

     subtitle:'Gathering hearts together in Christ.',

     description:'One Body. One Spirit. One Zion.',
    
     
 primaryButton:'Join Our Community',

  primaryButtonIcon:'bi bi-arrow-right-circle-fill'
  };



 
/*==========================================================
SMALL INFO TAGS X94
==========================================================*/

invitationUnityTagsX94 = [

  {

    id:1,

    title:'Faith',

    icon:'bi bi-heart-fill'

  },

  {

    id:2,

    title:'Unity',

    icon:'bi bi-people-fill'

  },

  {

    id:3,

    title:'Love',

    icon:'bi bi-stars'

  },

  {

    id:4,

    title:'Service',

    icon:'bi bi-hand-thumbs-up-fill'

  }

];

/*==========================================================
BUTTON CLICK X94
==========================================================*/

joinInvitationCommunityX94(){

  console.log('Join Community');

}

/*==========================================================
TAG CLICK X94
==========================================================*/

selectInvitationUnityTagX94(tag:any){

  console.log(tag);

}









/*==========================================================
BOOK OF MORMON UNITY CARDS X96
==========================================================*/

bookOfMormonUnityCardsX96 = [

/*==========================================================
CARD 1
==========================================================*/

{

    id:1,

    type:'believers',

    icon:'bi bi-book-fill',

    iconColor:'#C5962C',

    title:'Book of Mormon Believers',

    description:'We lovingly identify and invite all who believe in the Book of Mormon—including members of:',

    verse:'To come together as one people in a shared priesthood covenant.',

    scripture:'Mosiah 18:21',

    image:'assets/invitation/believers.png',

    imageAlt:'Book of Mormon Believers',

    buttonText:'Learn More',

    buttonColor:'#123E7A',

    members:[

        {

            id:1,

            icon:'bi bi-dot',

            text:'The Stone Church'

        },

        {

            id:2,

            icon:'bi bi-dot',

            text:'The Church of Jesus Christ of Latter-day Saints'

        },

        {

            id:3,

            icon:'bi bi-dot',

            text:'Remnant Church'

        },

        {

            id:4,

            icon:'bi bi-dot',

            text:'Church of Christ (Temple Lot)'

        },

        {

            id:5,

            icon:'bi bi-dot',

            text:'Restoration Branches throughout the world'

        }

    ]

},

/*==========================================================
CARD 2
==========================================================*/

{

    id:2,

    type:'covenant',

    icon:'bi bi-book-half',

    iconColor:'#C5962C',

    title:'Two Peoples, One Covenant – The Pattern in Mosiah',

    description:'The Book of Mormon provides a clear example of God working through two groups of believers.',

       image:'assets/invitation/covenant.png',

    imageAlt:'Mosiah',

    buttonText:'Read Mosiah',

    buttonColor:'#2C6B34',

    leftBox:{

        title:'King Limhi',

        subtitle:'and his people',

        location:'in the Land of Nephi',

        icon:'bi bi-people-fill'

    },

    rightBox:{

        title:'Mosiah',

        subtitle:'and Alma',

        location:'in the Land of Zarahemla',

        icon:'bi bi-people-fill'

    },

    covenantPoints:[

        {

            id:1,

            icon:'bi bi-check-circle-fill',

            text:'Both groups entered into covenant with God.'

        },

        {

            id:2,

            icon:'bi bi-check-circle-fill',

            text:'Both sought to follow Him faithfully.'

        },

        {

            id:3,

            icon:'bi bi-check-circle-fill',

            text:'One group waited upon the Lord for baptism.'

        },

        {

            id:4,

            icon:'bi bi-check-circle-fill',

            text:'In time God united them together.'

        },

        {

            id:5,

            icon:'bi bi-check-circle-fill',

            text:'They became one people before the Lord.'

        }

    ],

    scripture:'Mosiah 21–25'

},

/*==========================================================
CARD 3
==========================================================*/

{

    id:3,

    type:'fulfillment',

    icon:'bi bi-building',

    iconColor:'#C5962C',

    title:'A Fulfillment in Our Day',

    description:'That same pattern exists today.',

    buttonText:'Discover More',

    buttonColor:'#C5962C',

    topBox:{

        icon:'bi bi-globe2',

        title:'On one hand:',

        text:'Stone Church, Community of Christ, Temple Lot traditions and Restoration Branches'

    },

    middleBox:{

        icon:'bi bi-bank',

        title:'On the other hand:',

        text:'The Church of Jesus Christ of Latter-day Saints'

    },

    testimony:{

        icon:'bi bi-shield-check',

        title:'We testify:',

        description:'The Church of Jesus Christ of Latter-day Saints holds the authority to invite all into the baptismal covenant. The Lord is preparing His people to become one.'

    },

    imageOne:'assets/invitation/fulfillment-1.png',

    imageTwo:'assets/invitation/fulfillment-2.png',
    imageThree:'assets/invitation/fulfillment-3.png',
    imageFour:'assets/invitation/fulfillment-4.png',



}

];

/*==========================================================
CARD CLICK
==========================================================*/

bookOfMormonUnityCardClickX96(card:any){

    console.log(card);

}

/*==========================================================
BUTTON CLICK
==========================================================*/

bookOfMormonUnityButtonClickX96(card:any){

    console.log(card.title);

}







/*==========================================================
BOOK OF MORMON PATH CARDS DATA X97
==========================================================*/

bookOfMormonPathCardsX97 = [

/*==========================================================
CARD 1
==========================================================*/

{

    id:1,

    type:'churches',

    icon:'bi bi-buildings-fill',

    iconColor:'#1C5AA6',

    title:'Two Churches – Both on the Path',

    scripture:'Mosiah 21:31–35; 22:13–14; 25:14–18',

    description:'Both groups in Mosiah were accepted of God. Both were preparing for something greater. So it is today.',

    quote:'Unity is not the end—it is a historic beginning.',

    image:'assets/invitation/churches-1.png',

    buttonText:'Read More',

    buttonColor:'#1C5AA6'

},

/*==========================================================
CARD 2
==========================================================*/

{

    id:2,

    type:'unity',

    icon:'bi bi-hand-index-thumb-fill',

    iconColor:'#B88716',

    title:'A Call to Covenant Unity',

    subtitle:'Let us come together.',

    image:'assets/invitation/unity-1.png',

    buttonText:'Join Together',

    buttonColor:'#B88716',

    checklist:[

        {

            id:1,

            icon:'bi bi-check-circle-fill',

            text:'United in priesthood covenant'

        },

        {

            id:2,

            icon:'bi bi-check-circle-fill',

            text:'United in purpose'

        },

        {

            id:3,

            icon:'bi bi-check-circle-fill',

            text:'United in Christ'

        }

    ]

},

/*==========================================================
CARD 3
==========================================================*/

{

    id:3,

    type:'prophecy',

    icon:'bi bi-megaphone-fill',

    iconColor:'#B88716',

    title:'Prophetic Promises',

    image:'assets/invitation/prophecy-1.png',

    buttonText:'Study Prophecy',

    buttonColor:'#1F4E96',

    promises:[

        {

            id:1,

            icon:'bi bi-dot',

            text:'Surely the Lord God will do nothing, but He revealeth His secret unto His servants the prophets.'

        },

        {

            id:2,

            icon:'bi bi-dot',

            text:'He will suddenly come to His temple.'

        },

        {

            id:3,

            icon:'bi bi-dot',

            text:'Two witnesses will testify in Jerusalem.'

        },

        {

            id:4,

            icon:'bi bi-dot',

            text:'The gospel will be preached to every nation, kindred, tongue, and people.'

        }

    ]

}

];

/*==========================================================
CARD CLICK
==========================================================*/

bookOfMormonPathCardClickX97(card:any){

    console.log(card);

}

/*==========================================================
BUTTON CLICK
==========================================================*/

bookOfMormonPathButtonClickX97(card:any){

    console.log(card.title);

}











/*==========================================================
UNITY FOOTER X98
==========================================================*/

unityFooterX98 = {

  logo:'assets/images/footer/footer-logo.png',

  verse:
  'Behold, how good and how pleasant it is for brethren to dwell together in unity.',

  reference:'Psalm 133:1',

  scriptures:[

    {
      id:1,
      title:'2 Corinthians 13:11'
    },

    {
      id:2,
      title:'1 Peter 3:8'
    },

    {
      id:3,
      title:'2 Nephi 1:21'
    },

    {
      id:4,
      title:'Philippians 1:27'
    },

    {
      id:5,
      title:'D&C 45:6'
    },

    {
      id:6,
      title:'Mosiah 18:21'
    },

    {
      id:7,
      title:'Acts 4:32'
    },

    {
      id:8,
      title:'Moses 7:18'
    },

    {
      id:9,
      title:'3 Nephi 18:10'
    },

    {
      id:10,
      title:'John 17:20-23'
    },

    {
      id:11,
      title:'D&C 100:16'
    }

  ]

};




 visionCards = [

    /*==========================================================
    CARD 1
    ==========================================================*/

    {
      id: 1,

      icon: 'bi bi-stars',

      title: 'We Have a Common Vision',

      quote:
      'Be one; and if ye are not one, ye are not mine.',

      points: [

        'All have sought Christ as His disciples',

        'To establish the Center Stake of Zion',

        'A shared vision of Jesus Christ coming in His glory',

        'Loving our neighbors',

        'Serving all Restoration branches',

        'Welcoming all believers into covenant unity',

        'Becoming one in Christ'

      ],

      images: [

        'https://picsum.photos/500/320?random=11',

        'https://picsum.photos/500/320?random=12',

        'https://picsum.photos/500/320?random=13'

      ]

    },

    /*==========================================================
    CARD 2
    ==========================================================*/

    {
      id: 2,

      icon: 'bi bi-people-fill',

      title: 'Our Present Fellowship',

      quote:
      'Together we worship and love Jesus Christ.',

      points: [

        'Gather together in faith',

        'Study the scriptures',

        'Encourage one another',

        'Share testimonies',

        'Support families',

        'Grow spiritually',

        'Walk with Christ daily'

      ],

      images: [

        'https://picsum.photos/500/320?random=21',

        'https://picsum.photos/500/320?random=22',

        'https://picsum.photos/500/320?random=23'

      ]

    },

    /*==========================================================
    CARD 3
    ==========================================================*/

    {
      id: 3,

      icon: 'bi bi-flag-fill',

      title: 'The Work Before Us',

      quote:
      'You have fulfilled your mission.',

      points: [

        'Prepare for the Center Stake of Zion',

        'Love and serve all people',

        'Gather scattered Israel',

        'Share the Restoration message',

        'Strengthen every family',

        'Prepare Independence as a refuge',

        'Receive spiritual blessings'

      ],

      images: [

        'https://picsum.photos/500/320?random=31',

        'https://picsum.photos/500/320?random=32',

        'https://picsum.photos/500/320?random=33'

      ]

    },

    /*==========================================================
    CARD 4
    ==========================================================*/

    {
      id: 4,

      icon: 'bi bi-book-half',

      title: 'His Covenant',

      quote:
      'God shall hasten His work in its time.',

      points: [

        'Read the scriptures daily',

        'Live by faith',

        'Keep Christ at the center',

        'Strengthen the Church',

        'Serve with love',

        'Teach the next generation',

        'Remain steadfast'

      ],

      images: [

        'https://picsum.photos/500/320?random=41',

        'https://picsum.photos/500/320?random=42',

        'https://picsum.photos/500/320?random=43'

      ]

    }

  ];




 missionCards = [

    /*==========================================================
    CARD 1
    ==========================================================*/

    {

      id:1,

      theme:'theme-blue',

      icon:'bi bi-stars',

      title:'A New Mission Together',

      subtitle:'Now—together—we begin a new mission.',

      verse:'',

      image:'https://picsum.photos/600/400?random=501'

    },

    /*==========================================================
    CARD 2
    ==========================================================*/

    {

      id:2,

      theme:'theme-image',

      icon:'',

      title:'',

      subtitle:'',

      verse:'',

      image:'https://picsum.photos/600/400?random=502'

    },

    /*==========================================================
    CARD 3
    ==========================================================*/

    {

      id:3,

      theme:'theme-image',

      icon:'',

      title:'',

      subtitle:'',

      verse:'',

      image:'https://picsum.photos/600/400?random=503'

    },

    /*==========================================================
    CARD 4
    ==========================================================*/

    {

      id:4,

      theme:'theme-image',

      icon:'',

      title:'',

      subtitle:'',

      verse:'',

      image:'https://picsum.photos/600/400?random=504'

    },

    /*==========================================================
    CARD 5
    ==========================================================*/

    {

      id:5,

      theme:'theme-white',

      icon:'bi bi-crown-fill',

      title:'Closing Declaration',

      subtitle:'Glory, glory, Hallelujah.',

      verse:'',

      image:'https://picsum.photos/600/400?random=505'

    },

    /*==========================================================
    CARD 6
    ==========================================================*/

    {

      id:6,

      theme:'theme-image',

      icon:'',

      title:'',

      subtitle:'',

      verse:'',

      image:'https://picsum.photos/600/400?random=506'

    },

    /*==========================================================
    CARD 7
    ==========================================================*/

    {

      id:7,

      theme:'theme-blue',

      icon:'"',

      title:'"God shall hasten',

      subtitle:'His work in its time".',

      verse:'D&C 88:73',

      image:'https://picsum.photos/600/400?random=507'

    }

  ];



}
