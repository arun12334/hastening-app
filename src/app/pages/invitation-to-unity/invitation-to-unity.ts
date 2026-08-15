import { Component } from '@angular/core';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-invitation-to-unity',
  standalone: true,
  imports: [Header],
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
INVITATION TO UNITY BANNER DATA X94
==========================================================*/

invitationToUnityBannerX94 = {

  icon:'bi bi-people-fill',

  title:'Invitation to Unity',

  subTitle:'Gathering hearts together in Christ.',

  description:'One Body. One Spirit. One Zion.',

  verse:'"That they all may be one..."',

  scripture:'John 17:21',

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

}
