import { Component, OnInit } from '@angular/core';
import { Header } from '../../components/header/header';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sharing-a-story-of-love',
  imports: [Header, FormsModule],
  templateUrl: './sharing-a-story-of-love.html',
  styleUrl: './sharing-a-story-of-love.scss',
})
export class SharingAStoryOfLove implements OnInit {

  private readonly savedStoriesKey = 'sharing_a_story_of_love_saved_stories';

  constructor(private router: Router) {}

  /*==========================================================
  BANNER IMAGE
  ==========================================================*/

  bannerImage =
  'assets/loving/sharing-a-story-of-love-banner.png';

  /*==========================================================
  BANNER CONTENT
  ==========================================================*/

  bannerData = {

    icon:'bi bi-balloon-heart-fill',

    title:'Sharing a Story of Love',

    subTitle:
    'Inspiring others with acts of faith, kindness, and service.',

    verse:
    '"Behold, I say unto you, lift up your eyes... that ye may shine unto the world."',

    scripture:'— 3 Nephi 18:24'

  };



/*==========================================================
TOP INFO CARDS
==========================================================*/

storyDashboardStats = [

  {

    id:1,

    icon:'bi bi-people-fill',

    title:'Share up to five stories',

    description:'Share your top five stories at any point in time.',

    color:'#2E6BC6'

  },

  {

    id:2,

    icon:'bi bi-pencil-square',

    title:'Update your stories',

    description:'Revise and keep your stories current.',

    color:'#2E6BC6'

  },

  {

    id:3,

    icon:'bi bi-eye-fill',

    title:'Reviewed for kindness',

    description:'Stories are reviewed for appropriate content.',
    


    color:'#2E6BC6'

  },

  {

    id:4,

    icon:'bi bi-chat-heart-fill',

    title:'Share what is true',

    description:'Help others through genuine experiences.',

    color:'#2E6BC6'

  }

];

/*==========================================================
MY STORIES
==========================================================*/

myStories = [

  {

    id:1,

    image:'assets/loving/sharing-a-story-of-love-search-stories.png',

    title:'A Simple Meal, A Grateful Heart',

    description:'We delivered meals to a family in need. Their gratitude touched our hearts.',

    status:'True',

    badge:'success',

    date:'May 12, 2024'

  },

  {

    id:2,

    image:'assets/loving/sharingastory-2.png',

    title:'Planting Hope in the Community',

    description:'Neighbors gathered together for a service project.',

    status:'True',

    badge:'success',

    date:'May 5, 2024'

  },

  {

    id:3,

     image:'assets/loving/sharingastory-3.png',

    title:'Blessings from Our Chicken Coop',

    description:'Sharing eggs brought smiles to nearby families.',

    status:'Story Only',

    badge:'warning',

    date:'Apr 28, 2024'

  },

  {

    id:4,

    image:'assets/loving/sharingastory-4.png',

    title:'Learning Together',

    description:'Studying scriptures strengthened our friendships.',

    status:'True',

    badge:'success',

    date:'Apr 15, 2024'

  },

  {

    id:5,

    image:'assets/loving/sharingastory-5.png',

    title:'Small Acts, Big Impact',

    description:'Simple kindness changed someones day.',

    status:'Story Only',

    badge:'warning',

    date:'Apr 2, 2024'

  }

];

/*==========================================================
SEARCH FILTER
==========================================================*/

storySearch = {

  username:'',

  startDate:'',

  endDate:''

};

/*==========================================================
BOTTOM IMAGE
==========================================================*/

storyBottomImage =

'assets/sharing/sharing-a-story-of-love-bottom.png';

/*==========================================================
COUNTS
==========================================================*/

storyCounts = {

  myStories:5,

  totalStories:154

};

newStory = {
  title: '',
  author: '',
  date: '',
  time: '',
  description: '',
  status: 'Story Only',
  image: ''
};

showAddStoryModal = false;
editingStoryId: number | null = null;

get recentStories() {
  return this.myStories.slice(-5);
}

/*==========================================================
METHODS
==========================================================*/

selectedStory: any = null;

ngOnInit(): void {

  const savedStories = localStorage.getItem(this.savedStoriesKey);

  if (savedStories) {
    this.myStories = [...this.myStories, ...JSON.parse(savedStories)];
  }

  this.storyCounts.myStories = Math.min(this.myStories.length, 5);
  this.selectedStory = this.recentStories[0];

}

selectStory(story:any){

  this.selectedStory=story;

  console.log(story);

}

addNewStory(){

  this.editingStoryId = null;
  this.newStory = {
    title: '',
    author: '',
    date: '',
    time: '',
    description: '',
    status: 'Story Only',
    image: ''
  };
  this.showAddStoryModal = true;

}

closeAddStoryModal(): void {

  this.showAddStoryModal = false;

}

onStoryImageSelected(event: Event): void {

  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];

  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    this.newStory.image = typeof reader.result === 'string' ? reader.result : '';
  };
  reader.readAsDataURL(file);

}

saveNewStory(): void {

  if (!this.newStory.title.trim() || !this.newStory.description.trim()) {
    return;
  }

  const storyData = {
    ...this.newStory,
    title: this.newStory.title.trim(),
    author: this.newStory.author.trim() || 'Community Member',
    date: this.newStory.date || new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }),
    badge: this.newStory.status === 'True' ? 'success' : 'warning',
    image: this.newStory.image || 'assets/loving/sharing-a-story-of-love-search-stories.png'
  };

  const savedStory = this.editingStoryId === null
    ? { ...storyData, id: Date.now() }
    : { ...storyData, id: this.editingStoryId };

  this.myStories = this.editingStoryId === null
    ? [...this.myStories, savedStory]
    : this.myStories.map(story => story.id === this.editingStoryId ? savedStory : story);

  this.persistSavedStories();
  this.storyCounts.myStories = Math.min(this.myStories.length, 5);
  this.selectedStory = savedStory;
  this.showAddStoryModal = false;
  this.editingStoryId = null;

}

editStory(story: any): void {

  this.editingStoryId = story.id;
  this.newStory = {
    title: story.title || '',
    author: story.author || '',
    date: story.date || '',
    time: story.time || '',
    description: story.description || '',
    status: story.status || 'Story Only',
    image: story.image || ''
  };
  this.showAddStoryModal = true;

}

deleteStory(story: any): void {

  if (!window.confirm(`Delete "${story.title}"?`)) {
    return;
  }

  this.myStories = this.myStories.filter(item => item.id !== story.id);
  this.persistSavedStories();
  this.storyCounts.myStories = Math.min(this.myStories.length, 5);
  this.selectedStory = this.recentStories[0] || null;

}

private persistSavedStories(): void {

  const defaultStoryIds = new Set([1, 2, 3, 4, 5]);
  const savedStories = this.myStories.filter(story => !defaultStoryIds.has(story.id));
  localStorage.setItem(this.savedStoriesKey, JSON.stringify(savedStories));

}

validateDescriptionLength(): void {

  const maxDescriptionLength = 1500;

  if (this.newStory.description.length > maxDescriptionLength) {
    this.newStory.description = this.newStory.description.slice(0, maxDescriptionLength);
    window.alert('Description cannot exceed 1500 characters.');
  }

}

manageStories(){

  console.log('Manage Stories');

}

searchStories(){

  console.log(this.storySearch);

}

copyStory(story:any){

  console.log(story);

}

viewAllStories(){

  this.router.navigate(['/sharing-a-story-of-love-view-all-story']);

}


/*==========================================================
QUICK ACTION SECTION
==========================================================*/

quickActionCards = [

  {

    id:1,

    icon:'bi bi-pencil-square',

    iconColor:'#2E6BC6',

    iconBackground:'#EEF5FF',

    title:'Add a New Story',

    description:'Share your experience of service, faith, and love.',

    buttonText:'Add New Story',

    buttonIcon:'bi bi-plus-lg',

    action:'add'

  },

  {

    id:2,

    icon:'bi bi-arrow-repeat',

    iconColor:'#2E7D32',

    iconBackground:'#EDF8EE',

    title:'Update Your Stories',

    description:'Delete a story to make room for a new one.',

    buttonText:'Manage Stories',

    buttonIcon:'bi bi-pencil',

    action:'manage'

  },

  {

    id:3,

    icon:'bi bi-copy',

    iconColor:'#5C4B8A',

    iconBackground:'#F2EEFC',

    title:'Copy and Share',

    description:'Copy your story and paste it to share in other places.',

    buttonText:'Copy a Story',

    buttonIcon:'bi bi-files',

    action:'copy'

  }

];

/*==========================================================
SCRIPTURE CARD
==========================================================*/

quickActionScripture = {

  icon:'bi bi-balloon-heart',

  iconColor:'#D39418',

  title:'Matthew 7:20',

  verse:
  '"Wherefore, by their fruits ye shall know them."',

  description:
  'For behold, the tree is known by its fruit.'

};

/*==========================================================
BUTTON EVENTS
==========================================================*/

quickAction(type:string){

  switch(type){

    case 'add':

      this.addNewStory();

    break;

    case 'manage':

      console.log('Manage Stories');

    break;

    case 'copy':

      console.log('Copy Story');

    break;

  }

}


/*==========================================================
FOOTER TITLE
==========================================================*/

footerSection = {

  title:'Love thy neighbor as thyself.',

  cityIcon:'bi bi-buildings',

  cityOutline:true

};

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
  
}