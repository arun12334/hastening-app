import { Component, inject } from '@angular/core';
import { Header } from '../../components/header/header';
import { Router } from '@angular/router';
import { FeatureAccess } from '../../services/feature-access';

@Component({
  selector: 'app-sisters-in-zion',
  imports: [Header],
  templateUrl: './sisters-in-zion.html',
  styleUrl: './sisters-in-zion.scss',
})
export class SistersInZion {
  private readonly featureAccess = inject(FeatureAccess);

  /*==========================================================
  BANNER BACKGROUND IMAGE
  ==========================================================*/

  sistersInZionBannerImage =
  'assets/loving/sisters-in-zion-banner.png';

  /*==========================================================
  BANNER CONTENT
  ==========================================================*/

  sistersInZionBanner = {

    icon:'bi bi-people-fill',

    title:'Sisters in Zion',

    subTitle:
    'Lift and support each other as we serve the Lord together.',

    verse:
    '"And all women who are believers in God are sisters in Zion."',

    scripture:
    'Mosiah 18:9',

    buttonText:'Join the Sisterhood'

  };

  /*==========================================================
  BUTTON CLICK
  ==========================================================*/

  joinSisterhood(){
    if (!this.featureAccess.requireMember()) return;

    console.log('Join Sisters in Zion');

  }



  /*==========================================================
RELIEF SOCIETY MAIN CARD
==========================================================*/

reliefSocietyMainCardX91 = {

  title: "Join Emma's Relief Society",

  subTitle:
  "Connect with sisters and build faith, friendship and support.",

  icon: "bi bi-house-heart-fill",

  templeImage:
  "assets/loving/relief-society.png",

  heading:
  "Joining Emma's Relief Society",

  requestType:
  "Text Requests Only",

  phone:
  "(+01) 248-445-2179",

  steps: [

    "Your Name",

    "Phone Number",

    "Address, City, and Country",

    "In countries where legally permissible, male visitors will come and vet your interest and provide information about the nearest Relief Society meeting.",

    "Responses provided worldwide."

  ],

  buttonText:
  "TEXT MY REQUEST TO JOIN"

};

/*==========================================================
RIGHT SIDE ACTION CARDS
==========================================================*/

reliefSocietyCardsX91 = [

  {

    id:1,

    icon:"bi bi-heart-fill",

    iconColor:"#6A44B8",

    title:"Indicate a Need Request",

    description:
    "Let the sisters know how they can support and uplift you right now.",

    badge:"",

    arrow:"bi bi-chevron-right",
    route:"/relief-society-need"

  },

  {

    id:2,

    icon:"bi bi-envelope-paper-heart-fill",

    iconColor:"#6A44B8",

    title:"Strengthening Teenage Youth in Christ",

    description:
    "Help teenage youth grow in faith, hope, and Christ-centered living.",

    badge:"",

    arrow:"bi bi-chevron-right",
    route:"/sharing-our-faith"

  },

  {

    id:3,

    icon:"bi bi-calendar-heart-fill",

    iconColor:"#6A44B8",

    title:"Join a Book of Mormon Study Group",

    description:
    "Join an existing study group or begin a new group with sisters.",

    badge:"Maximum 20 sisters per group",
    route:"/book-of-mormon-study-groups"

  },

  {

    id:4,

    icon:"bi bi-book-fill",

    iconColor:"#6A44B8",

    title:"Why Women Join Relief Society",

    description:
    "Learn about the purpose and work of Relief Society.",

    badge:"",
    route:"/joining-emmas-relief-society"

  }

];

constructor(private router: Router) {}

goBack(): void {
  this.router.navigate(['/loving-our-neighbor']);
}


/*==========================================================
CLICK METHODS
==========================================================*/

joinReliefSocietyX91(){

  console.log("Join Relief Society");
    this.router.navigate(['/joining-emmas-relief-society']);

}

reliefSocietyCardClickX91(card:any){
  if (card.route) {
    this.router.navigate([card.route]);
  }

}

textRequestJoinX91() {
this.router.navigate(['/joining-emmas-relief-society']);

}



/*==========================================================
BOTTOM SCRIPTURE BANNER X82
==========================================================*/

sistersInZionBottomVerseX82 = {

  id:82,

  icon:'bi bi-heart',

  iconColor:'#7A4BB7',

  verse:
  'We are stronger together. As we lift, love, and serve one another, we become more like our Savior.',

  scripture:
  'Mosiah 18:21'

};

/*==========================================================
CLICK
==========================================================*/

bottomVerseClickX82(){

  console.log(this.sistersInZionBottomVerseX82);

}

}