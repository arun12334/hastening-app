import { Header } from '../../components/header/header';
import { Component, HostListener, OnInit } from '@angular/core';

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

 
 /*==========================================================
  DESKTOP IMAGE
  ==========================================================*/

  desktopBannerImage =
  'assets/sharing/sharing-our-faith-banner.png';

  /*==========================================================
  MOBILE IMAGE
  ==========================================================*/

  mobileBannerImage =
  'assets/worshiping/worshiping-christ-through-music-mobile-banner.png';

  /*==========================================================
  CURRENT IMAGE
  ==========================================================*/

  bannerImage = '';

  /*==========================================================
  INIT
  ==========================================================*/

  ngOnInit(){

    this.nb8821UpdateBannerImage();
      setInterval(()=>{

      this.nextSlideX774551Y886331();

    },5000);

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




/*==========================================================
  ACTIVE SLIDE
  X774551-Y886331
  ==========================================================*/

  currentSlideX774551Y886331:number=0;

  /*==========================================================
  PROPHET SECTION
  X774551-Y886331
  ==========================================================*/

  prophetSectionX774551Y886331={

    title:'A. Messages from Church Prophets',

    button:'View All'

  };

  /*==========================================================
  PROPHET SLIDER
  X774551-Y886331
  ==========================================================*/

  prophetMessagesX774551Y886331=[

    {

      id:1,

      image:'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900',

      title:'The Joy of Sharing the Gospel',

      author:'President Thomas S. Monson',

      description:'Share Christ with kindness, faith, compassion, and love every day.'

    },

    {

      id:2,

      image:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900',

      title:'Strength Through Prayer',

      author:'President Russell M. Nelson',

      description:'Daily prayer brings peace, wisdom, and strength for every challenge.'

    },

    {

      id:3,

      image:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900',

      title:'Faith In Jesus Christ',

      author:'Elder Dieter F. Uchtdorf',

      description:'Faith in Christ fills life with hope, joy, and eternal purpose.'

    }

  ];

  /*==========================================================
  DISCIPLE HEADER
  X774551-Y886331
  ==========================================================*/

  discipleHeaderX774551Y886331={

    title:'B. Messages from Disciples',

    button:'View All'

  };

  /*==========================================================
  DISCIPLE LIST
  X774551-Y886331
  ==========================================================*/

  discipleMessagesX774551Y886331=[

    {

      id:1,

      image:'https://randomuser.me/api/portraits/women/65.jpg',

      title:'Finding Peace Through Faith',

      description:'Faith gives strength during difficult moments.',

      time:'2h ago'

    },

    {

      id:2,

      image:'https://randomuser.me/api/portraits/men/75.jpg',

      title:'A Changed Heart',

      description:'Forgiveness through Jesus Christ changes lives.',

      time:'1d ago'

    },

    {

      id:3,

      image:'https://randomuser.me/api/portraits/women/32.jpg',

      title:'Hope In Christ',

      description:'His grace brings hope every day.',

      time:'2d ago'

    },

    {

      id:4,

      image:'https://randomuser.me/api/portraits/men/41.jpg',

      title:'Serving Others',

      description:'Serving people is serving the Lord.',

      time:'3d ago'

    }

  ];

  /*==========================================================
  SHARE BUTTON
  X774551-Y886331
  ==========================================================*/

  shareButtonX774551Y886331={

    icon:'bi bi-pencil-square',

    text:'Share Your Testimony'

  };

  /*==========================================================
  POSTING GUIDE
  X774551-Y886331
  ==========================================================*/

  postingGuideX774551Y886331={

    title:'B. Message from Disciples – Posting Guidelines',

    description:'Share your testimony, faith, and encouragement with others.',

    button:'Thank you for helping build faith and unity in Christ.',

    rules:[

      'Be kind and respectful',

      'Keep messages uplifting',

      'Maximum length: One page',

      'Share personal experiences',

      'Always glorify Jesus Christ'

    ]

  };

  /*==========================================================
  LIFE CYCLE
  X774551-Y886331
  ==========================================================*/

   

  /*==========================================================
  NEXT SLIDE
  X774551-Y886331
  ==========================================================*/

  nextSlideX774551Y886331(){

    this.currentSlideX774551Y886331++;

    if(this.currentSlideX774551Y886331>=this.prophetMessagesX774551Y886331.length){

      this.currentSlideX774551Y886331=0;

    }

  }

  /*==========================================================
  CHANGE SLIDE
  X774551-Y886331
  ==========================================================*/

  changeSlideX774551Y886331(index:number){

    this.currentSlideX774551Y886331=index;

  }

  /*==========================================================
  SHARE TESTIMONY
  X774551-Y886331
  ==========================================================*/

  shareTestimonyX774551Y886331(){

    console.log('Share Testimony');

  }

  /*==========================================================
  VIEW ALL
  X774551-Y886331
  ==========================================================*/

  viewAllProphetsX774551Y886331(){

    console.log('View All Prophets');

  }

  viewAllDisciplesX774551Y886331(){

    console.log('View All Disciples');

  }









  /*==========================================================
  LEFT HEADER
  X662991-Y448113
  ==========================================================*/

  scriptureHeaderX662991Y448113 = {

    icon:'bi bi-book',

    title:'C. Scriptures & Book of Mormon',

    description:
    'Share verses from any scripture that strengthens your faith and uplifts others. You may post verses from the Bible, Book of Mormon, or any other scripture.',

    button:'Open Scripture Library'

  };

  /*==========================================================
  TODAY READING
  X662991-Y448113
  ==========================================================*/

  todayReadingHeaderX662991Y448113='Today\'s Reading Plan';

  /*==========================================================
  READING PLAN
  X662991-Y448113
  ==========================================================*/

  readingPlanX662991Y448113=[

    {

      id:1,

      icon:'bi bi-book',

      testament:'Old Testament',

      verse:'Psalm 23:1–6',

      completed:true

    },

    {

      id:2,

      icon:'bi bi-book',

      testament:'New Testament',

      verse:'John 14:1–6',

      completed:true

    },

    {

      id:3,

      icon:'bi bi-book',

      testament:'Book of Mormon',

      verse:'Mosiah 2:5',

      completed:true

    }

  ];

  /*==========================================================
  INVITE CARD
  X662991-Y448113
  ==========================================================*/

  inviteCardX662991Y448113={

    icon:'bi bi-people-fill',

    title:'We are stronger together.',

    description:'Invite others to come unto Christ and be built upon the foundation of apostles and prophets.'

  };

  /*==========================================================
  TEMPLE HEADER
  X662991-Y448113
  ==========================================================*/

  templeHeaderX662991Y448113={

    icon:'bi bi-bank',

    title:'D. Temple Heritage',

    button:'Explore All Temple History'

  };

  /*==========================================================
  PAST HEADER
  ==========================================================*/

  pastTempleTitleX662991Y448113='Past: Temples Through the Ages';

  futureTempleTitleX662991Y448113='Future: The Lord Will Come to His Temple';

  /*==========================================================
  TEMPLE GRID
  ==========================================================*/

  templeHistoryX662991Y448113=[

    {

      id:1,

      title:"Israel's Tabernacle",

      subtitle:'In the Wilderness',

      image:'https://picsum.photos/300/220?random=101'

    },

    {

      id:2,

      title:"Solomon's",

      subtitle:'Temple',

      image:'https://picsum.photos/300/220?random=102'

    },

    {

      id:3,

      title:"Nephi's",

      subtitle:'Temple',

      image:'https://picsum.photos/300/220?random=103'

    },

    {

      id:4,

      title:"King Benjamin's",

      subtitle:'Temple',

      image:'https://picsum.photos/300/220?random=104'

    },

    {

      id:5,

      title:'Bountiful',

      subtitle:'Temple',

      image:'https://picsum.photos/300/220?random=105'

    },

    {

      id:6,

      title:"King Herod's",

      subtitle:'Temple',

      image:'https://picsum.photos/300/220?random=106'

    },

    {

      id:7,

      title:'Kirtland',

      subtitle:'Temple',

      image:'https://picsum.photos/300/220?random=107'

    },

    {

      id:8,

      title:'Nauvoo',

      subtitle:'Temple',

      image:'https://picsum.photos/300/220?random=108'

    },

    {

      id:9,

      title:'Salt Lake',

      subtitle:'Temple',

      image:'https://picsum.photos/300/220?random=109'

    },

    {

      id:10,

      title:'Kansas City',

      subtitle:'Temple',

      image:'https://picsum.photos/300/220?random=110'

    }

  ];

  /*==========================================================
  FUTURE PANEL
  ==========================================================*/

  futureTemplePanelX662991Y448113={

    image:'https://picsum.photos/700/900?random=201',

    title:'The Lord Will Come to His Temple',

    scripture:'"The Lord, whom ye seek, shall suddenly come to his temple, even the messenger of the covenant..."',

    reference:'Malachi 3:1',

    bottomImage:'https://picsum.photos/700/450?random=202',

    bottomTitle:'Independence Temple'

  };

  /*==========================================================
  METHODS
  ==========================================================*/

  openScriptureLibraryX662991Y448113(){

    console.log('Open Scripture Library');

  }

  openTempleHistoryX662991Y448113(){

    console.log('Temple History');

  }

  openTempleDetailsX662991Y448113(item:any){

    console.log(item);

  }







  
/*==========================================================
DAILY WORSHIP HEADER
X994712-Y615834
==========================================================*/

dailyWorshipHeaderX994712Y615834 = {

  icon: 'bi bi-brightness-high',

  title: 'Daily Worship & Inspiration',

  description:
    'Strengthen your faith each day through scripture reading, prayer, worship, and Christ-centered inspiration.',

  image:
    'https://picsum.photos/900/500?random=301',

  button:
    'Start Your Day in Christ'

};

/*==========================================================
WEEKLY WORSHIP PLAN
==========================================================*/

dailyWorshipPlanX994712Y615834 = [

  {
    id:1,
    day:'Monday',
    icon:'bi bi-book',
    title:'Morning Prayer & Psalm 23'
  },

  {
    id:2,
    day:'Tuesday',
    icon:'bi bi-book',
    title:'Walking with Jesus'
  },

  {
    id:3,
    day:'Wednesday',
    icon:'bi bi-book',
    title:'Faith During Trials'
  },

  {
    id:4,
    day:'Thursday',
    icon:'bi bi-book',
    title:'Love One Another'
  },

  {
    id:5,
    day:'Friday',
    icon:'bi bi-book',
    title:'Serving with Humility'
  },

  {
    id:6,
    day:'Saturday',
    icon:'bi bi-book',
    title:'Family Bible Study'
  },

  {
    id:7,
    day:'Sunday',
    icon:'bi bi-book',
    title:'Worship & Thanksgiving'
  }

];

/*==========================================================
DAILY DEVOTIONAL CARDS
==========================================================*/

dailyDevotionalCardsX994712Y615834 = [

  {

    id:1,

    image:'https://picsum.photos/500/350?random=302',

    title:'Verse of the Day',

    verse:'John 14:6',

    description:
    'Reflect on today’s scripture and allow God’s word to guide your decisions.',

    button:'Read Todays Verse'

  },

  {

    id:2,

    image:'https://picsum.photos/500/350?random=303',

    title:'Daily Prayer',

    verse:'Matthew 6:9',

    description:
    'Spend a few quiet moments in prayer and strengthen your relationship with Christ.',

    button:'Start Prayer'

  }

];

/*==========================================================
INSPIRATION QUOTES
==========================================================*/

dailyQuotesX994712Y615834 = [

  {

    id:1,

    icon:'bi bi-quote',

    title:'Faith',

    description:
    'With God all things are possible.'

  },

  {

    id:2,

    icon:'bi bi-heart-fill',

    title:'Love',

    description:
    'Love one another as I have loved you.'

  },

  {

    id:3,

    icon:'bi bi-stars',

    title:'Hope',

    description:
    'Trust in the Lord with all your heart.'

  }

];

/*==========================================================
BUTTON EVENTS
==========================================================*/

startDailyWorshipX994712Y615834(){

  console.log('Start Daily Worship');

}

openVerseOfDayX994712Y615834(card:any){

  console.log(card);

}

openPrayerGuideX994712Y615834(card:any){

  console.log(card);

}

openDailyReadingX994712Y615834(item:any){

  console.log(item);

}

openQuoteX994712Y615834(item:any){

  console.log(item);

}



/*==========================================================
SCRIPTURE FOOTER
X557821-Y771255
==========================================================*/

scriptureFooterX557821Y771255 = {

  title: 'Scripture References',

  references: [

    '1 Peter 3:15',

    'Acts 16:31',

    'Acts 1:8-9',

    '1 Peter 1:15',

    'Psalm 46:10',

    'Mosiah 18:9',

    'Jeremiah 9:3',

    'Philippians 1:14',

    'D&C 100:5',

    'D&C 3:18',

    'D&C 84:85',

    'D&C 109:5',

    'D&C 109:6',

    'D&C 60:2'

  ]

};



// Tab - 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*==========================================================
SECTION HEADER
xwgw6327y37
==========================================================*/

templeSectionHeaderXwgw6327y37Tvdh72y82ydswjhbs = {

  title: 'Past: Temples Through the Ages',

  subtitle:
  'Discover temples throughout history and how God has blessed His people through sacred places of worship.',

  button: 'Explore Temple History',

  icon: 'bi bi-bank'

};

/*==========================================================
TEMPLE CARDS
==========================================================*/

templeHistoryCardsXwgw6327y37Tvdh72y82ydswjhbs = [

{

id:1,

number:'1',

title:"Israel's Tabernacle",

location:'Wilderness',

description:
'A portable sanctuary where God dwelt among His people during their journey.',

image:'https://picsum.photos/500/350?random=801'

},

{

id:2,

number:'2',

title:"Solomon's Temple",

location:'Jerusalem',

description:
'Built by King Solomon as a magnificent house dedicated to the Lord.',

image:'https://picsum.photos/500/350?random=802'

},

{

id:3,

number:'3',

title:"Nephi's Temple",

location:'Promised Land',

description:
'Constructed by the Nephites according to the pattern shown by the Lord.',

image:'https://picsum.photos/500/350?random=803'

},

{

id:4,

number:'4',

title:"King Benjamin's Temple",

location:'Zarahemla',

description:
'Where King Benjamin gathered the people to teach the word of God.',

image:'https://picsum.photos/500/350?random=804'

},

{

id:5,

number:'5',

title:'Bountiful Temple',

location:'Bountiful',

description:
'Jesus Christ appeared to His people following His resurrection.',

image:'https://picsum.photos/500/350?random=805'

},

{

id:6,

number:'6',

title:"Herod's Temple",

location:'Jerusalem',

description:
'Expanded and restored during the reign of Herod the Great.',

image:'https://picsum.photos/500/350?random=806'

},

{

id:7,

number:'7',

title:'Kirtland Temple',

location:'Ohio',

description:
'The first temple of this dispensation dedicated in 1836.',

image:'https://picsum.photos/500/350?random=807'

},

{

id:8,

number:'8',

title:'Nauvoo Temple',

location:'Illinois',

description:
'Built by the Saints in Nauvoo as a sacred house of worship.',

image:'https://picsum.photos/500/350?random=808'

},

{

id:9,

number:'9',

title:'Salt Lake Temple',

location:'Utah',

description:
'A symbol of faith completed after years of sacrifice and devotion.',

image:'https://picsum.photos/500/350?random=809'

},

{

id:10,

number:'10',

title:'Kansas City Temple',

location:'Missouri',

description:
'A modern temple serving members with sacred ordinances.',

image:'https://picsum.photos/500/350?random=810'

}

];

/*==========================================================
FEATURE STATISTICS
==========================================================*/

templeStatisticsXwgw6327y37Tvdh72y82ydswjhbs=[

{

icon:'bi bi-bank',

title:'10',

subtitle:'Historic Temples'

},

{

icon:'bi bi-people-fill',

title:'Millions',

subtitle:'Faithful Believers'

},

{

icon:'bi bi-globe2',

title:'Worldwide',

subtitle:'Sacred Worship'

}

];

/*==========================================================
BUTTON METHODS
==========================================================*/

openTempleCardXwgw6327y37Tvdh72y82ydswjhbs(card:any){

console.log(card);

}

exploreTempleHistoryXwgw6327y37Tvdh72y82ydswjhbs(){

console.log('Explore Temple History');

}

openTempleStatisticsXwgw6327y37Tvdh72y82ydswjhbs(item:any){

console.log(item);

}

 

}