import { Component } from '@angular/core';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-neighborhood-bb-events',
  imports: [Header],
  templateUrl: './neighborhood-bb-events.html',
  styleUrl: './neighborhood-bb-events.scss',
})
export class NeighborhoodBbEvents {

  //==========================================================
  // HERO BACKGROUND IMAGE
  //==========================================================

 bannerImage =
'assets/neighborhood/bannerss.png';
 


//==========================================================
  // HERO CONTENT
  //==========================================================

  bannerData = {

    icon: 'bi bi-fire',

    title: 'Neighborhood B&B',

    subtitle: 'Barbecue & Book of Mormon',

    description:
      'Build friendships, enjoy delicious barbecue, and strengthen faith through meaningful conversations centered on Jesus Christ.',

    
  };



  //==========================================================
// TOP TAB MENU
//==========================================================

activeTab = 0;

bannerTabs = [

  {
    id: 0,
    icon: 'bi bi-calendar-event-fill',
    title: 'Upcoming Events'
  },

  {
    id: 1,
    icon: 'bi bi-geo-alt-fill',
    title: 'Event Map'
  },

  {
    id: 2,
    icon: 'bi bi-people-fill',
    title: 'Host Tools'
  },

  {
    id: 3,
    icon: 'bi bi-book-fill',
    title: 'Discussion Guides'
  },

  {
    id: 4,
    icon: 'bi bi-person-heart',
    title: 'My B&B Activity'
  }

];

changeTab(index:number){

    this.activeTab=index;

}



/*==========================================================
UPCOMING B&B EVENTS
==========================================================*/

bbUpcomingEvents = [

  {
    id: 1,

    title: 'Backyard Barbecue & Book of Mormon Night',

    date: 'May 24',

    time: '6:00 PM',

    location: 'Johnson Home',

    area: 'Pineview',

    image:
      'assets/neighborhood/event1.jpg',

    buttonText: 'RSVP'
  },

  {
    id: 2,

    title: 'Potluck & Purpose',

    date: 'May 31',

    time: '5:30 PM',

    location: 'Garcia Home',

    area: 'Maple Ridge',

      image:
      'assets/neighborhood/event2.jpg',

    buttonText: 'RSVP'
  },

  {
    id: 3,

    title: 'Sunday Scripture and Feast',

    date: 'June 7',

    time: '4:00 PM',

    location: 'Anderson Home',

    area: 'Hillside',

     image:
      'assets/neighborhood/event3.jpg',

    buttonText: 'RSVP'
  },

  {
    id: 4,

    title: 'Youth B&B Hangout',

    date: 'June 14',

    time: '6:30 PM',

    location: 'Stake Center',

    area: 'Pavilion',

    image:
      'assets/neighborhood/event4.jpg',

    buttonText: 'RSVP'
  }

];

/*==========================================================
CARD TITLE
==========================================================*/

bbUpcomingEventHeading = {

    title: 'Upcoming B&B Events',

    subtitle: 'Join a local gathering near you.',

    button: 'View All Events'

};

/*==========================================================
EVENT CLICK
==========================================================*/

openEvent(event:any){

    console.log(event);

}

/*==========================================================
RSVP
==========================================================*/

eventRsvp(event:any){

    console.log('RSVP', event);

}

/*==========================================================
VIEW ALL
==========================================================*/

viewAllEvents(){

    console.log('View All Events');

}


/*==========================================================
B&B GATHERINGS NEAR YOU
==========================================================*/

bbGatheringSection = {

  title: 'B&B Gatherings Near You',

  subTitle: 'Find, join, and serve in gatherings in your area.',

  useLocationButton: 'Use My Location'

};

/*==========================================================
MAP IMAGE
Replace with Google Map later
==========================================================*/

bbMapImage =
'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200';

/*==========================================================
MAP MARKERS
Dummy Values
==========================================================*/

bbMapMarkers = [

  {
    id:1,
    top:'22%',
    left:'18%'
  },

  {
    id:2,
    top:'26%',
    left:'48%'
  },

  {
    id:3,
    top:'18%',
    left:'77%'
  },

  {
    id:4,
    top:'55%',
    left:'26%'
  },

  {
    id:5,
    top:'63%',
    left:'82%'
  },

  {
    id:6,
    top:'78%',
    left:'60%'
  },

  {
    id:7,
    top:'50%',
    left:'52%',
    active:true
  }

];

/*==========================================================
HOST CARD
==========================================================*/

bbHostCard = {

  title:'Can’t find one near you?',

  subTitle:'Be the spark in your neighborhood.',

  image:'assets/neighborhood/gatheringsnear.png',

  button:'Sign Up to Host'

};

/*==========================================================
LOCATION BUTTON
==========================================================*/

useMyLocation(){

    console.log('Use Current Location');

}

/*==========================================================
HOST BUTTON
==========================================================*/

signUpHost(){

    console.log('Host Registration');

}

/*==========================================================
MARKER CLICK
==========================================================*/

selectGathering(marker:any){

    console.log(marker);

}


/*==========================================================
HOST TOOLS & RESOURCES
==========================================================*/

hostToolsSection = {

  title: 'Host Tools & Resources',

  subTitle: 'Everything you need for a meaningful gathering.'

};

/*==========================================================
HOST TOOLS
==========================================================*/

hostTools = [

  {

    id: 1,

    icon: 'bi bi-people-fill',

    title: 'Sign Up to Host',

    description: 'Create a gathering and invite your neighbors.',

    color: '#C7860A'

  },

  {

    id: 2,

    icon: 'bi bi-cup-hot-fill',

    title: 'Meal Coordination',

    description: 'Share dishes, plan menus, and serve together.',

    color: '#C7860A'

  },

  {

    id: 3,

    icon: 'bi bi-music-note-beamed',

    title: 'Music & Worship Ideas',

    description: 'Uplift your gathering with songs of Zion.',

    color: '#C7860A'

  },

  {

    id: 4,

    icon: 'bi bi-share-fill',

    title: 'Invite & Share',

    description: 'Easily reach out to friends and neighbors.',

    color: '#C7860A'

  }

];

/*==========================================================
ACTIVE TOOL
==========================================================*/

selectedHostTool = 1;

/*==========================================================
HOST TOOL CLICK
==========================================================*/

selectHostTool(tool:any){

    this.selectedHostTool = tool.id;

    console.log(tool);

}

/*==========================================================
OPEN RESOURCE
==========================================================*/

openHostResource(tool:any){

    console.log('Open Resource', tool);

}

/*==========================================================
DISCUSSION GUIDES SECTION
==========================================================*/

discussionGuideSection = {

  title: 'Discussion Guides',

  subTitle: 'Simple prompts to inspire Christ-centered conversations.'

};

/*==========================================================
BOOK OF MORMON FHE GROUP
==========================================================*/

fheGroupCard = {

  title: 'Organize or Join a Book of Mormon FHE Group',

  subTitle: 'Study together. Strengthen families. Build faith.',

  image:'assets/neighborhood/join-book.png',

  button: 'Find or Create a Group'

};

/*==========================================================
FHE FEATURES
==========================================================*/

fheGroupFeatures = [

  {

    id:1,

    icon:'bi bi-people',

    title:'Form or join a Book of Mormon FHE Group in your area.'

  },

  {

    id:2,

    icon:'bi bi-person-check',

    title:'Up to 40 persons per group.'

  },

  {

    id:3,

    icon:'bi bi-shield-check',

    title:'Group admission is monitored by the Group Organizer.'

  }

];

/*==========================================================
CONVERSATION STARTERS
==========================================================*/

conversationCard = {

  title:'Conversation Starters',

  subTitle:'Simple prompts to inspire Christ-centered discussions.',

  button:'View All Prompts'

};

conversationQuestions = [

  {

    id:1,

    question:'What brought you peace this week?'

  },

  {

    id:2,

    question:'What do you love about Jesus Christ?'

  },

  {

    id:3,

    question:'What is one scripture that strengthens you?'

  }

];

/*==========================================================
SHARE YOUR STORY
==========================================================*/

shareStoryCard = {

  title:'Share Your Story',

  subTitle:'How has B&B gathering blessed you?',

  description:'Share your experience to inspire others.',

  image:
    'assets/neighborhood/share-your-story.png',

  button:'Share Your Story'

};

/*==========================================================
BUTTON METHODS
==========================================================*/

findOrCreateGroup(){

    console.log('Find Or Create Group');

}

viewAllPrompts(){

    console.log('View All Prompts');

}

shareStory(){

    console.log('Share Story');

}

/*==========================================================
QUESTION CLICK
==========================================================*/

selectQuestion(question:any){

    console.log(question);

}

/*==========================================================
FEATURE CLICK
==========================================================*/

selectFeature(feature:any){

    console.log(feature);

}


/*==========================================================
B&B STARTER KIT CARD
==========================================================*/

starterKitCard = {

  title: 'B&B Starter Kit',

  subTitle:
    'Everything you need to begin meaningful Neighborhood B&B gatherings.'

};

/*==========================================================
STARTER KIT ITEMS
==========================================================*/

starterKitItems = [

  {

    id:1,

   icon: 'bi bi-bookmark-heart',

    title:'Pray Together',

    description:'Begin and end with a spirit of unity.',

    color:'#6B7280',

    type:'feature'

  },

  {

    id:2,

    icon:'bi bi-fork-knife',

    title:'Eat Together',

    description:'Food brings hearts closer.',

    color:'#C88709',

    type:'feature'

  },

  {

    id:3,

    icon:'bi bi-book',

    title:'Read Together',

    description:'The Book of Mormon brings light.',

    color:'#C88709',

    type:'feature'

  },

  {

    id:4,

    icon:'bi bi-heart',

    title:'Share Testimonies',

    description:'Lift and strengthen each other.',

    color:'#C88709',

    type:'feature'

  },

  {

    id:5,

    icon:'bi bi-download',

    title:'Download Starter Kit',

    description:
      'Download checklists, invitations, meal ideas and discussion guides.',

    color:'#C88709',

    button:'Download Kit',

    type:'download'

  }

];

/*==========================================================
ACTIVE CARD
==========================================================*/

selectedStarterCard = 1;

/*==========================================================
CARD CLICK
==========================================================*/

selectStarterCard(card:any){

    this.selectedStarterCard = card.id;

    console.log(card);

}

/*==========================================================
DOWNLOAD
==========================================================*/

downloadStarterKit(){

    console.log('Download Starter Kit');

}

/*==========================================================
OPEN FEATURE
==========================================================*/

openStarterFeature(card:any){

    console.log(card);

}

/*==========================================================
SCRIPTURES FOOTER
==========================================================*/

scriptureFooter = {

  icon: 'bi bi-book',

  title: 'Scriptures That Unite Us'

};

/*==========================================================
SCRIPTURE REFERENCES
==========================================================*/

scriptureReferences = [

  {
    id: 1,
    reference: 'D&C 64:2'
  },

  {
    id: 2,
    reference: '1 John 1:7'
  },

  {
    id: 3,
    reference: '2 Corinthians 6:14'
  },

  {
    id: 4,
    reference: '2 Nephi 25:8'
  },

  {
    id: 5,
    reference: '2 Nephi 31:20'
  },

  {
    id: 6,
    reference: 'Title Page BOM 1:1'
  },

  {
    id: 7,
    reference: 'Mormon 5:14'
  },

  {
    id: 8,
    reference: 'Ezekiel 37:19'
  },

  {
    id: 9,
    reference: 'John 10:16'
  }

];

/*==========================================================
ACTIVE SCRIPTURE
==========================================================*/

selectedScripture = 1;

/*==========================================================
SCRIPTURE CLICK
==========================================================*/

selectScripture(scripture:any){

    this.selectedScripture = scripture.id;

    console.log(scripture);

}

/*==========================================================
OPEN SCRIPTURE
Replace later with router navigation
==========================================================*/

openScripture(scripture:any){

    console.log('Open Scripture:', scripture.reference);

}

}