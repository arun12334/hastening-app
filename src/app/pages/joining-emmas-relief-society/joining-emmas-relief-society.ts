import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { ChangeDetectorRef } from '@angular/core';

declare var bootstrap: any;



@Component({
  selector: 'app-joining-emmas-relief-society',
  imports: [Header],
  templateUrl: './joining-emmas-relief-society.html',
  styleUrl: './joining-emmas-relief-society.scss',
})
export class JoiningEmmasReliefSociety {

constructor(
  private cdr: ChangeDetectorRef
) {}

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
SELECTED BENEFIT
==========================================================*/

selectedSisterBenefitXsz9824:any = {};

/*==========================================================
DETAILS DATA
==========================================================*/

sisterBenefitDetailsXsz9824 = [

{

id:1,

title:'Worldwide Sisterhood',

icon:'bi bi-heart-fill',

iconColor:'#6E49B8',

description:'Build meaningful friendships with faithful women around the world.',

image:'https://picsum.photos/900/450?random=301',

content1:'Become part of a loving Christ-centered community where women encourage one another through prayer, friendship, and shared faith. Every sister is welcomed with kindness and compassion.',

content2:'Build lifelong relationships across cultures while participating in Bible studies, worship gatherings, and community outreach that strengthen both faith and fellowship.',

content3:'Together we grow in love, unity, and service as daughters of God, inspiring one another to follow Jesus Christ every day.',

scripture:'"Be kindly affectioned one to another with brotherly love." — Romans 12:10',

highlights:[

'Global Christian sisterhood',

'Prayer support',

'Faith-based friendships',

'Online & local fellowship'

]

},

{

id:2,

title:'Spiritual Growth',

icon:'bi bi-book-half',

iconColor:'#6E49B8',

description:'Study scripture together, strengthen faith, and follow Christ.',

image:'https://picsum.photos/900/450?random=302',

content1:'Discover the joy of studying God’s Word together through inspiring Bible lessons and devotional reflections.',

content2:'Grow spiritually by praying together, discussing scripture, and applying Biblical principles in everyday life.',

content3:'Strengthen your personal relationship with Jesus Christ while encouraging other women to remain faithful in every season.',

scripture:'"Grow in the grace and knowledge of our Lord." — 2 Peter 3:18',

highlights:[

'Bible Study',

'Daily Devotions',

'Prayer Meetings',

'Faith Discussions'

]

},

{

id:3,

title:'Support One Another',

icon:'bi bi-people-fill',

iconColor:'#6E49B8',

description:'Encourage women through love, service, compassion, and prayer.',

image:'https://picsum.photos/900/450?random=303',

content1:'Every woman experiences challenges. Sisters in Zion exists to provide encouragement during every stage of life.',

content2:'Serve one another through acts of kindness, heartfelt prayer, and practical support within the Christian community.',

content3:'Together we carry each others burdens and reflect Christs love through genuine compassion and faithful service.',

scripture:'"Bear ye one another’s burdens." — Galatians 6:2',

highlights:[

'Prayer Partners',

'Care Groups',

'Encouragement',

'Community Service'

]

},

{

id:4,

title:'Christ-Centered Living',

icon:'bi bi-stars',

iconColor:'#6E49B8',

description:'Strengthen your testimony while growing closer to Jesus Christ.',

image:'https://picsum.photos/900/450?random=304',

content1:'Live each day with purpose by placing Jesus Christ at the center of every decision and relationship.',

content2:'Develop habits of prayer, worship, scripture reading, and service that transform everyday life.',

content3:'Be a light in your family, workplace, church, and community while reflecting the love of Christ.',

scripture:'"Let your light so shine before men." — Matthew 5:16',

highlights:[

'Daily Prayer',

'Christian Lifestyle',

'Serve Others',

'Walk with Christ'

]

}

];

/*==========================================================
OPEN MODAL
==========================================================*/

benefitButtonClickX64(card:any){

const data = this.sisterBenefitDetailsXsz9824.find(

x=>x.id===card.id

);

if(data){

this.selectedSisterBenefitXsz9824 = data;

}

const modal = new bootstrap.Modal(

document.getElementById('xsz9824SisterBenefitModal')

);

modal.show();

}

/*==========================================================
JOIN BUTTON
==========================================================*/


/*==========================================================
YHG77373-Emma-join-UJHJJ88 START
==========================================================*/

showYHG77373EmmaJoinUJHJJ88Toast:boolean = false;

/*==========================================================
YHG77373-Emma-join-UJHJJ88 END
==========================================================*/

joinSistersInZionXsz9824(){

console.log(

'Join:',

this.selectedSisterBenefitXsz9824.title

);

/*---------------------------------------
CLOSE MODAL
---------------------------------------*/

const modal = bootstrap.Modal.getInstance(

document.getElementById(

'xsz9824SisterBenefitModal'

)

);

modal?.hide();

/*---------------------------------------
SHOW TOAST
---------------------------------------*/

setTimeout(()=>{

this.showYHG77373EmmaJoinUJHJJ88Toast=true;
 this.cdr.markForCheck();

},250);

setTimeout(()=>{

this.showYHG77373EmmaJoinUJHJJ88Toast=false;
 this.cdr.markForCheck();

},3250);

}

}
