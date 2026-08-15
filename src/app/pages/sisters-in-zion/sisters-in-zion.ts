import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sisters-in-zion',
  imports: [Header],
  templateUrl: './sisters-in-zion.html',
  styleUrl: './sisters-in-zion.scss',
})
export class SistersInZion {

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
  "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=700&q=80",

  heading:
  "Joining Emma's Relief Society",

  requestType:
  "Text Requests Only",

  phone:
  "(+01) 248-445-2179",

  steps: [

    "Your Name",

    "Phone Number",

    "Address or City",

    "Receive information about the nearest Relief Society meeting location.",

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

    arrow:"bi bi-chevron-right"

  },

  {

    id:2,

    icon:"bi bi-envelope-paper-heart-fill",

    iconColor:"#6A44B8",

    title:"Offer Help for a Need Request",

    description:
    "Find needs that match your heart and offer help to bless a sister.",

    badge:"",

    arrow:"bi bi-chevron-right"

  },

  {

    id:3,

    icon:"bi bi-calendar-heart-fill",

    iconColor:"#6A44B8",

    title:"Post a Service Opportunity",

    description:
    "Invite a service opportunity and request RSVPs.",

    badge:"Minimum RSVPs required"

  },

  {

    id:4,

    icon:"bi bi-book-fill",

    iconColor:"#6A44B8",

    title:"Join a Book of Mormon Study Group",

    description:
    "Grow together in faith and understanding.",

    badge:"Maximum 20 sisters per group"

  }

];

constructor(private router: Router) {}


/*==========================================================
CLICK METHODS
==========================================================*/

joinReliefSocietyX91(){

  console.log("Join Relief Society");
    this.router.navigate(['/joining-emmas-relief-society']);

}

reliefSocietyCardClickX91(card:any){

  console.log(card);

}

textRequestJoinX91() {

  console.log("Text Request");

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