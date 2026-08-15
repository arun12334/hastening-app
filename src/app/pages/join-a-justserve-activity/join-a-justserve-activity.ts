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
  'assets/loving/join-a-justserve-activity-banner.png';

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
    'assets/loving/join-a-justserve-activity-baking-bread.jpg',

    gallery:[

      'assets/loving/join-a-justserve-activity-baking-bread-1.jpg',

      'assets/loving/join-a-justserve-activity-baking-bread-2.jpg', 

      'assets/loving/join-a-justserve-activity-baking-bread-3.jpg'

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
    'assets/loving/garden-main.jpg',

    gallery:[

      'assets/loving/garden-1.jpg',

      'assets/loving/garden-2.jpg',

      'assets/loving/garden-3.jpg'

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
    'assets/loving/chicken-main.jpg',

    gallery:[

      'assets/loving/chicken-1.png',

      'assets/loving/chicken-2.jpg',

      'assets/loving/chicken-3.jpg'

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
    'assets/loving/finance-main.jpg',

    gallery:[

      'assets/loving/finance-1.jpg',  

           'assets/loving/finance-2.png',  

            'assets/loving/finance-3.png',  

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