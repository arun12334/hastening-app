import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
@Component({
  selector: 'app-joining-emmas-relief-society',
  imports: [Header],
  templateUrl: './joining-emmas-relief-society.html',
  styleUrl: './joining-emmas-relief-society.scss',
})
export class JoiningEmmasReliefSociety {



/*==========================================================
BANNER IMAGE R91
==========================================================*/

joiningEmmasReliefSocietyBannerImageR91 =
'assets/loving/joining-emmas-relief-society-banner.png';

/*==========================================================
BANNER CONTENT R91
==========================================================*/

joiningEmmasReliefSocietyBannerR91 = {

  id:91,

  icon:'bi bi-flower1',

  title:'Why Women Join Emma’s Relief Society',

  subTitle:
  'Faith • Friendship • Charity • Service',

  description:
  'Organized by Emma Smith in 1842, Relief Society brings women together to lift, support, and strengthen one another as we seek to relieve the wants of the poor and the afflicted.',

  buttonText:
  'What is Relief Society?',

  buttonIcon:
  'bi bi-arrow-right',

  iconColor:'#6D43B6'

};

/*==========================================================
BANNER FEATURES R91
==========================================================*/

joiningEmmasReliefSocietyFeaturesR91 = [

  {

    id:1,

    icon:'bi bi-heart-fill',

    title:'Faith'

  },

  {

    id:2,

    icon:'bi bi-people-fill',

    title:'Friendship'

  },

  {

    id:3,

    icon:'bi bi-stars',

    title:'Charity'

  },

  {

    id:4,

    icon:'bi bi-hands',

    title:'Service'

  }

];

/*==========================================================
BUTTON CLICK R91
==========================================================*/

joiningEmmasReliefSocietyLearnMoreR91(){

  console.log('Relief Society');

}

/*==========================================================
FEATURE CLICK R91
==========================================================*/

joiningEmmasReliefSocietyFeatureClickR91(feature:any){

  console.log(feature);

}







/*==========================================================
SISTERS IN ZION BENEFITS CARDS X64
==========================================================*/

sistersInZionBenefitCardsX64 = [

  {

    id:1,

    icon:'bi bi-heart-fill',

    iconColor:'#6E49B8',

    title:'Worldwide Sisterhood',

    description:
    'Build meaningful friendships with faithful women around the world.',

    buttonText:'Learn More'

  },

  {

    id:2,

    icon:'bi bi-book-half',

    iconColor:'#6E49B8',

    title:'Spiritual Growth',

    description:
    'Study scripture together, strengthen faith, and follow Christ.',

    buttonText:'Study Together'

  },

  {

    id:3,

    icon:'bi bi-people-fill',

    iconColor:'#6E49B8',

    title:'Support One Another',

    description:
    'Encourage women through love, service, compassion, and prayer.',

    buttonText:'Join Community'

  },

  {

    id:4,

    icon:'bi bi-stars',

    iconColor:'#6E49B8',

    title:'Christ-Centered Living',

    description:
    'Strengthen your testimony while growing closer to Jesus Christ.',

    buttonText:'Grow in Faith'

  }

];

/*==========================================================
CARD CLICK
==========================================================*/

selectBenefitCardX64(card:any){

    console.log(card);

}

/*==========================================================
BUTTON CLICK
==========================================================*/

benefitButtonClickX64(card:any){

    console.log(card.title);

}

}
