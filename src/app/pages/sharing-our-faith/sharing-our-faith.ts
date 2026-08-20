import { Header } from '../../components/header/header';
import { Component, HostListener, OnInit } from '@angular/core';
declare var bootstrap:any;


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

  {
    id: 2,
    icon: 'bi bi-book',
    title: 'Scriptures & Book of Mormon'
  },

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

  // {
  //   id: 5,
  //   icon: 'bi bi-pencil-square',
  //   title: 'Share Your Testimony'
  // }

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

    image:"assets/sharing/temples/temples-1.png",

    },

    {

      id:2,

      title:"Solomon's",

      subtitle:'Temple',

   image:"assets/sharing/temples/temples-2.png",

    },

    {

      id:3,

      title:"Nephi's",

      subtitle:'Temple',

image:"assets/sharing/temples/temples-3.png",
    },

    {

      id:4,

      title:"King Benjamin's",

      subtitle:'Temple',

   image:"assets/sharing/temples/temples-4.png",

    },

    {

      id:5,

      title:'Bountiful',

      subtitle:'Temple',
image:"assets/sharing/temples/temples-5.png",

    },

    {

      id:6,

      title:"King Herod's",

      subtitle:'Temple',

   image:"assets/sharing/temples/temples-6.png",

    },

    {

      id:7,

      title:'Kirtland',

      subtitle:'Temple',

 image:"assets/sharing/temples/temples-7.png",

    },

    {

      id:8,

      title:'Nauvoo',

      subtitle:'Temple',

image:"assets/sharing/temples/temples-8.png",

    },

    {

      id:9,

      title:'Salt Lake',

      subtitle:'Temple',

image:"assets/sharing/temples/temples-9.png",

    },

    {

      id:10,

      title:'Kansas City',

      subtitle:'Temple',

image:"assets/sharing/temples/temples-10.png",

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




// tab - 1
 




/*==========================================================
OPEN CARD
==========================================================*/

openDiscipleMessageXkdm8237Hs9283(card:any):void{

console.log(card);

}



// tab -3 


 


/*==========================================================
OPEN CARD
==========================================================*/

openDailyWorshipXwrp8742Jd7284(card:any):void{

console.log(card);

}
 


// tab -5 


/*==========================================================
SHARE YOUR TESTIMONY
==========================================================*/

shareTestimonyCardsXst9248Vh6382 = [

{

id:1,

name:'John Anderson',

country:'United States',

church:'Grace Community Church',

image:'https://picsum.photos/500/500?random=201',

testimony:'Jesus gave me peace during difficult seasons and taught me to trust His perfect plan every day.',

scripture:'Romans 8:28'

},

{

id:2,

name:'Maria Johnson',

country:'Canada',

church:'Living Hope Church',

image:'https://picsum.photos/500/500?random=202',

testimony:'Prayer transformed my life and strengthened my faith in Christ through every challenge.',

scripture:'Philippians 4:6-7'

},

{

id:3,

name:'David Samuel',

country:'India',

church:'Faith Fellowship',

image:'https://picsum.photos/500/500?random=203',

testimony:'God opened unexpected doors and reminded me that His timing is always perfect.',

scripture:'Jeremiah 29:11'

},

{

id:4,

name:'Sarah Williams',

country:'Australia',

church:'Hope Church',

image:'https://picsum.photos/500/500?random=204',

testimony:'The love of Jesus healed my broken heart and filled my life with hope and joy.',

scripture:'Psalm 147:3'

},

{

id:5,

name:'Michael Brown',

country:'United Kingdom',

church:'New Life Church',

image:'https://picsum.photos/500/500?random=205',

testimony:'I discovered true freedom after surrendering my life completely to Jesus Christ.',

scripture:'John 8:36'

},

{

id:6,

name:'Rebecca Thomas',

country:'Singapore',

church:'City Worship Center',

image:'https://picsum.photos/500/500?random=206',

testimony:'Gods grace carried me through every struggle and never left my side.',

scripture:'2 Corinthians 12:9'

},

{

id:7,

name:'Daniel Wilson',

country:'South Africa',

church:'Kingdom Church',

image:'https://picsum.photos/500/500?random=207',

testimony:'The Word of God renewed my mind and gave me confidence to follow Christ faithfully.',

scripture:'Romans 12:2'

},

{

id:8,

name:'Grace Martin',

country:'Philippines',

church:'Christ Fellowship',

image:'https://picsum.photos/500/500?random=208',

testimony:'Jesus answered my prayers beyond my expectations and strengthened my family.',

scripture:'Matthew 7:7'

},

{

id:9,

name:'Christopher Lee',

country:'Malaysia',

church:'Light of Life Church',

image:'https://picsum.photos/500/500?random=209',

testimony:'Every trial became a testimony because God remained faithful through every season.',

scripture:'Isaiah 41:10'

},

{

id:10,

name:'Emily Scott',

country:'New Zealand',

church:'Victory Church',

image:'https://picsum.photos/500/500?random=210',

testimony:'The Holy Spirit filled my heart with peace and joy beyond understanding.',

scripture:'John 14:27'

},

{

id:11,

name:'Joseph Daniel',

country:'India',

church:'Calvary Church',

image:'https://picsum.photos/500/500?random=211',

testimony:'God restored my family and taught us to love, forgive, and trust Him together.',

scripture:'Joshua 24:15'

},

{

id:12,

name:'Hannah Grace',

country:'United States',

church:'Redeemer Church',

image:'https://picsum.photos/500/500?random=212',

testimony:'Walking with Jesus has become the greatest blessing and purpose of my life.',

scripture:'Psalm 23:1'

}

];





/*==========================================================
OPEN TESTIMONY
==========================================================*/

openShareTestimonyXst9248Vh6382(card:any):void{

console.log(card);

// Future:
// this.router.navigate(['/testimony', card.id]);

}





/*==========================================================
SHARE BUTTON
==========================================================*/

shareYourTestimonyXst9248Vh6382():void{

console.log('Share Your Testimony');

}


// temple tab


/*==========================================================
TEMPLE HERITAGE
==========================================================*/

templeHeritageCardsXth6284 = [

{
id:1,
title:"Israel's Tabernacle",
location:"Wilderness",
image:"assets/sharing/temples/temples-1.png",
description:"The portable sanctuary where God dwelt among Israel during their wilderness journey.",
scripture:"Exodus 25:8"
},

{
id:2,
title:"Solomon's Temple",
location:"Jerusalem",
image:"assets/sharing/temples/temples-2.png",
description:"Built by King Solomon as a magnificent temple dedicated to the Lord.",
scripture:"1 Kings 6:1"
},

{
id:3,
title:"Nephi's Temple",
location:"Promised Land",
image:"assets/sharing/temples/temples-3.png",
description:"Constructed after the pattern of Solomon's Temple by the Nephites.",
scripture:"2 Nephi 5:16"
},

{
id:4,
title:"King Benjamin's Temple",
location:"Zarahemla",
image:"assets/sharing/temples/temples-4.png",
description:"King Benjamin taught his people from the temple with power and faith.",
scripture:"Mosiah 2:1"
},

{
id:5,
title:"Bountiful Temple",
location:"Bountiful",
image:"assets/sharing/temples/temples-5.png",
description:"The resurrected Jesus Christ appeared to the Nephites at this temple.",
scripture:"3 Nephi 11:1"
},

{
id:6,
title:"Herod's Temple",
location:"Jerusalem",
image:"assets/sharing/temples/temples-6.png",
description:"The temple where Jesus taught, healed, and cleansed the courts.",
scripture:"John 2:16"
},

{
id:7,
title:"Kirtland Temple",
location:"Ohio",
image:"assets/sharing/temples/temples-7.png",
description:"The first temple of the Restoration where heavenly visions were received.",
scripture:"Doctrine & Covenants 110"
},

{
id:8,
title:"Nauvoo Temple",
location:"Illinois",
image:"assets/sharing/temples/temples-8.png",
description:"Built by faithful Saints as a sacred place of worship and ordinances.",
scripture:"Doctrine & Covenants 124"
},

{
id:9,
title:"Salt Lake Temple",
location:"Utah",
image:"assets/sharing/temples/temples-9.png",
description:"A worldwide symbol of faith, sacrifice, and devotion to Jesus Christ.",
scripture:"Psalm 27:4"
},

{
id:10,
title:"Kansas City Temple",
location:"Missouri",
image:"assets/sharing/temples/temples-10.png",
description:"A modern house of the Lord dedicated to strengthening families.",
scripture:"Isaiah 2:2"
}
 
];


/*==========================================================
OPEN TEMPLE
==========================================================*/

openTempleHeritageXth6284(card:any):void{

    console.log(card);

    // Future
    // this.router.navigate(['/temple-heritage', card.id]);

}


/*==========================================================
EXPLORE ALL TEMPLES
==========================================================*/

exploreTempleHeritageXth6284():void{

    console.log('Explore Temple Heritage');

    // Future
    // this.router.navigate(['/temple-heritage']);

}










/*==========================================================
HTP99842
TEMPLE PROPHECY DATA
==========================================================*/

templeProphecyCardsHTP99842 = [

{

id:1,

category:'Old Testament',

title:'Malachi Prophecy',

description:'The Lord promised that He would suddenly come to His holy temple according to the words of the prophet Malachi.',

scripture:'Malachi 3:1',


image:'assets/sharing/hastening-temple/hastening-temple-1.png'

},

{

id:2,

category:'Book of Mormon',

title:'Bountiful Temple',

description:'The resurrected Jesus Christ appeared to the Nephites at the temple in Bountiful and taught His gospel.',

scripture:'3 Nephi 11',

image:'assets/sharing/hastening-temple/hastening-temple-2.png'

},

{

id:3,

category:'Latter-day Prophecy',

title:'Independence Temple',

description:'The Lord revealed that a holy temple would one day be built in Independence, Missouri.',

scripture:'Doctrine & Covenants 84',

image:'assets/sharing/hastening-temple/hastening-temple-3.png'

},

{

id:4,

category:'Second Coming',

title:'New Jerusalem',

description:'The New Jerusalem will become a sacred gathering place where Christ will reign with His people.',

scripture:'Ether 13:3-10',

image:'assets/hastening-temple/new-jerusalem.jpg'

},

{

id:5,

category:'Millennium',

title:'Millennial Temple',

description:'During the Millennium temples will continue to bless the children of God with sacred ordinances.',

scripture:'Isaiah 2:2-3',

image:'assets/hastening-temple/millennium-temple.jpg'

},

{

id:6,

category:'Future Glory',

title:'Temple Worship',

description:'Faithful disciples will gather in holy temples to worship the Lord and prepare for His glorious return.',

scripture:'Doctrine & Covenants 97:15-17',

image:'assets/hastening-temple/future-temple.jpg'

}

];

/*==========================================================
SELECTED CARD
==========================================================*/

selectedTempleProphecyHTP99842:any={};

/*==========================================================
OPEN CARD
==========================================================*/

openTempleProphecyHTP99842(card:any){

this.selectedTempleProphecyHTP99842=card;

console.log(card);

}

/*==========================================================
LEARN MORE
==========================================================*/

readTempleProphecyHTP99842(card:any){

this.selectedTempleProphecyHTP99842=card;

const modal=new bootstrap.Modal(

document.getElementById(

'HTP99842TempleModal'

)

);

modal.show();

}

/*==========================================================
CLOSE MODAL
==========================================================*/

closeTempleProphecyHTP99842(){

const modal=bootstrap.Modal.getInstance(

document.getElementById(

'HTP99842TempleModal'

)

);

modal?.hide();

}










/*==========================================================
HTP99842
CARD SCROLL
==========================================================*/

scrollTempleCardsHTP99842(

direction:'left'|'right'

){

const container=document.getElementById(

'HTP99842CardWrapper'

);

if(!container){

return;

}

const scrollAmount=420;

container.scrollBy({

left:

direction==='left'

? -scrollAmount

: scrollAmount,

behavior:'smooth'

});

}





}



 


