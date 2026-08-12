import { Component } from '@angular/core';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-join-a-justserve-activity',
  imports: [Header],
  templateUrl: './join-a-justserve-activity.html',
  styleUrl: './join-a-justserve-activity.scss',
})
export class JoinAJustserveActivity {

  /*==========================================================
  BANNER IMAGE
  ==========================================================*/

  bannerImage =
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2200&q=80';

  /*==========================================================
  BANNER CONTENT
  ==========================================================*/

  bannerData={

    icon:'bi bi-heart-pulse-fill',

    title:'Just Serve Projects',

    subTitle:'Small acts of service. Eternal impact.',

    verse:
    '"As ye have done it unto one of the least of these my brethren, ye have done it unto me."',

    scripture:'Matthew 25:40'

  };







 /*==========================================================
TOP NAVIGATION TABS
==========================================================*/

justServeTabs = [

  {
    id:1,
    title:'Pray for Others',
    icon:'bi bi-balloon-heart',
    count:24
  },

  {
    id:2,
    title:'Sisters in Zion',
    icon:'bi bi-people',
    count:18
  },

  {
    id:3,
    title:'Just Serve Map',
    icon:'bi bi-geo-alt',
    count:36
  },

  {
    id:4,
    title:'Stories of Love',
    icon:'bi bi-heart',
    count:52
  },

  {
    id:5,
    title:'My Service',
    icon:'bi bi-person',
    count:9
  }

];

/*==========================================================
ACTIVE TAB
==========================================================*/

activeTab:number = 1;

/*==========================================================
TAB CLICK
==========================================================*/

selectJustServeTab(tab:any){

    this.activeTab = tab.id;

}










/*==========================================================
JUST SERVE PROJECTS
==========================================================*/

justServeProjects = [

  {

    id:1,

    badge:'a',

    badgeColor:'#2D73D2',

    title:'JustServe— Baking Bread for Others',

    description:
    'Bake bread and share it with neighbors, families, and those in need.',

    heroImage:
    'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',

    gallery:[

      'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=500&q=80',

      'https://images.unsplash.com/photo-1523294587484-bae6cc870010?auto=format&fit=crop&w=500&q=80',

      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=500&q=80'

    ],

    bottomIcon:'bi bi-heart-fill',

    bottomText:'Serve with Love',

    buttonText:'View Opportunities',

    color:'#2D73D2'

  },

  {

    id:2,

    badge:'b',

    badgeColor:'#4E9C43',

    title:'JustServe— Helping Others with a Garden',

    description:
    'Plant, grow, and share fresh vegetables with families and communities.',

    heroImage:
    'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80',

    gallery:[

      'https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=500&q=80',

      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=500&q=80',

      'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=500&q=80'

    ],

    bottomIcon:'bi bi-flower1',

    bottomText:'Grow Together',

    buttonText:'View Opportunities',

    color:'#4E9C43'

  },

  {

    id:3,

    badge:'c',

    badgeColor:'#E57A00',

    title:'JustServe— Chicken Coops and Eggs',

    description:
    'Build coops, care for chickens, and share fresh eggs with families.',

    heroImage:
    'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&w=900&q=80',

    gallery:[

      'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=500&q=80',

      'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=500&q=80',

      'https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=500&q=80'

    ],

    bottomIcon:'bi bi-egg-fried',

    bottomText:'Provide & Share',

    buttonText:'View Opportunities',

    color:'#E57A00'

  },

  {

    id:4,

    badge:'d',

    badgeColor:'#5C46B8',

    title:'JustServe— Join a Financial Self-Reliance Training Group',

    description:
    'Learn, support, and grow together in faith and financial strength.',

    heroImage:
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80',

    gallery:[

      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=80',

      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80',

      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80'

    ],

    bottomIcon:'bi bi-graph-up-arrow',

    bottomText:'Learn & Grow',

    buttonText:'View Opportunities',

    color:'#5C46B8'

  }

];

/*==========================================================
METHODS
==========================================================*/

selectedProject:any=null;

viewOpportunity(project:any){

    this.selectedProject = project;

    console.log('View Opportunity',project);

}

projectBottomAction(project:any){

    console.log('Bottom Action',project);

}


/*==========================================================
SERVICE ACTION CARDS
==========================================================*/

serviceActionCards = [

  {

    id:1,

    type:'action',

    icon:'bi bi-geo-alt-fill',

    iconColor:'#2C73D2',

    title:'Find Service Opportunities',

    

    buttonText:'Explore JustServe Map',

    image:'',

    verse:'',

    scripture:''

  },

  {

    id:2,

    type:'action',

    icon:'bi bi-star-fill',

    iconColor:'#F0A500',

    title:'Record Your Service',

 

    buttonText:'Go to My Service',

    image:'',

    verse:'',

    scripture:''

  },

  {

    id:3,

    type:'verse',

    icon:'bi bi-balloon-heart-fill',

    iconColor:'#D8A43B',

    title:'',

    description:'',

    buttonText:'',

    image:'',

    verse:
    '"Let us not love in word, neither in tongue; but in deed and in truth."',

    scripture:'1 John 3:18'

  },

  
  {

    id:4,

    type:'verse',

    icon:'bi bi-balloon-heart-fill',

    iconColor:'#272584',

    title:'',

    description:'',

    buttonText:'',

    image:'',

    verse:
   '"When ye are in the service of your fellow beings ye are only in the service of your God."',
 

  },


   

];

/*==========================================================
METHODS
==========================================================*/

selectedServiceCard:any=null;

serviceCardAction(card:any){

    this.selectedServiceCard = card;

    console.log('Card Action',card);

}

inviteSomeone(){

    console.log('Invite Someone');

}

openJustServeMap(){

    console.log('Open JustServe Map');

}

goToMyService(){

    console.log('Go To My Service');

}


/*==========================================================
FOOTER ACTIONS
==========================================================*/

footerActions=[

  {

    id:1,

    icon:'bi bi-balloon-heart',

    title:'Pray',

    route:'/pray'

  },

  {

    id:2,

    icon:'bi bi-heart',

    title:'Serve',

    route:'/serve'

  },

  {

    id:3,

    icon:'bi bi-book',

    title:'Learn',

    route:'/learn'

  },

  {

    id:4,

    icon:'bi bi-people',

    title:'Unite',

    route:'/unite'

  },

  {

    id:5,

    icon:'bi bi-buildings',

    title:'Build Zion',

    route:'/build-zion'

  }

];

/*==========================================================
SCRIPTURE CLICK
==========================================================*/

selectFooterScripture(scripture:any){

  console.log(scripture);

}

/*==========================================================
ACTION CLICK
==========================================================*/

footerAction(action:any){

  console.log(action);

}


/*==========================================================
SCRIPTURE REFERENCES
==========================================================*/

footerScriptures = [

  {
    id:1,
    reference:'Galatians 6:10'
  },

  {
    id:2,
    reference:'3 Nephi 12:44'
  },

  {
    id:3,
    reference:'Ephesians 4:32'
  },

  {
    id:4,
    reference:'D&C 59:6'
  },

  {
    id:5,
    reference:'2 Nephi 31:20'
  },

  {
    id:6,
    reference:'John 15:13'
  },

  {
    id:7,
    reference:'1 John 4:21'
  },

  {
    id:8,
    reference:'Matthew 25:34–40'
  },

  {
    id:9,
    reference:'Matthew 22:39'
  },

  {
    id:10,
    reference:'Moroni 7:45'
  },

  {
    id:11,
    reference:'Alma 7:11–13'
  },

  {
    id:12,
    reference:'Galatians 5:14'
  },

  {
    id:13,
    reference:'Ephesians 2:8'
  },

  {
    id:14,
    reference:'Ephesians 5:2'
  },

  {
    id:15,
    reference:'Mosiah 2:17'
  }

];

/*==========================================================
FOOTER TITLE
==========================================================*/

footerSection = {

  title:'Love thy neighbor as thyself.',

  cityIcon:'bi bi-buildings',

  cityOutline:true

};


}