import { Header } from '../../components/header/header';
import { Component, ElementRef, HostListener, OnInit, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FeatureAccess } from '../../services/feature-access';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
declare var bootstrap:any;


@Component({
  selector: 'app-sharing-our-faith',
  imports: [Header, FormsModule],
  templateUrl: './sharing-our-faith.html',
  styleUrl: './sharing-our-faith.scss',
})
export class SharingOurFaith {
  private readonly featureAccess = inject(FeatureAccess);
  private readonly sanitizer = inject(DomSanitizer);

  //==========================================================
  // HERO BACKGROUND IMAGE
  //==========================================================

 
 /*==========================================================
  DESKTOP IMAGE
  ==========================================================*/

  desktopBannerImage =
  'assets/sharing/sharing-our-faith-banner1.png';

  /*==========================================================
  MOBILE IMAGE
  ==========================================================*/

  mobileBannerImage =
   'assets/sharing/sharing-our-faith-banner122.png';

  /*==========================================================
  CURRENT IMAGE
  ==========================================================*/

  bannerImage = '';

  /*==========================================================
  INIT
  ==========================================================*/

  ngOnInit(){

 

    this.nb8821UpdateBannerImage();
    this.loadPostedScriptures();
    this.loadApprovedDiscipleMessages();
    this.pendingDiscipleMessages = JSON.parse(localStorage.getItem('pendingDiscipleMessages') || '[]');
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

      image:'https://img.youtube.com/vi/igc22pVQRAA/hqdefault.jpg',

      title:'The Three Rs of Choice',

      author:'President Thomas S. Monson',

      description:'President Thomas S. Monson teaches that wise choices are guided by the three Rs: the right, the real, and the result.'
      ,video:'https://www.youtube.com/embed/igc22pVQRAA?rel=0'

    },

    {

      id:2,

      image:'https://img.youtube.com/vi/QpFqIH0_-tI/hqdefault.jpg',

      title:'Three Sisters',
      author:'President Dieter F. Uchtdorf',

      description:'President Dieter F. Uchtdorf shares a message about three sisters and the faith, love, and service they represent.'
      ,video:'https://www.youtube.com/embed/QpFqIH0_-tI?rel=0'

    },

    {

      id:3,

      image:'https://img.youtube.com/vi/gV0uA3a_eIU/hqdefault.jpg',

      title:'The Lord Jesus Christ Will Come Again',
      author:'President Russell M. Nelson',

      description:'President Russell M. Nelson testifies that the Lord Jesus Christ will come again.'
      ,video:'https://www.youtube.com/embed/gV0uA3a_eIU?rel=0'

    }

  ];

  trustedYoutubeUrl(url: string): SafeResourceUrl {
    if (!url.startsWith('https://www.youtube.com/embed/')) {
      throw new Error('Only YouTube embed URLs are supported.');
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  @ViewChild('prophetVideoPlayer')
  prophetVideoPlayer!: ElementRef<HTMLVideoElement>;

  prophetVideoPlaying = false;
  prophetVideoMuted = false;
  prophetVideoProgress = 0;
  prophetVideoCurrentTime = '0:00';
  prophetVideoTotalTime = '0:00';

  get isAdministrator(): boolean {
    return localStorage.getItem('isAdministrator') === 'true';
  }

  prophetUpload = {
    title: '',
    description: '',
    thumbnailUrl: '',
    videoUrl: '',
    videoFileName: ''
  };
  showProphetUploadModal = false;
  prophetUploadLoading = false;
  prophetUploadToast = false;
  showAdministratorWarning = false;
  prophetUploadMessage = '';

  openProphetUploadModal(): void {
    if (!this.featureAccess.requireMember()) return;

    if (!this.isAdministrator) {
      this.showAdministratorWarning = true;
      return;
    }

    this.prophetUploadMessage = '';
    this.showProphetUploadModal = true;
  }

  closeAdministratorWarning(): void {
    this.showAdministratorWarning = false;
  }

  closeProphetUploadModal(): void {
    if (!this.prophetUploadLoading) {
      this.showProphetUploadModal = false;
    }
  }

  selectProphetVideo(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file || !file.type.startsWith('video/')) {
      return;
    }

    this.prophetUpload.videoUrl = URL.createObjectURL(file);
    this.prophetUpload.videoFileName = file.name;
  }

  selectProphetThumbnail(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file || !file.type.startsWith('image/')) {
      return;
    }

    this.prophetUpload.thumbnailUrl = URL.createObjectURL(file);
  }

  async uploadProphetVideo(): Promise<void> {
    if (!this.featureAccess.requireMember()) return;

    if (
      !this.isAdministrator ||
      !this.prophetUpload.title.trim() ||
      !this.prophetUpload.description.trim() ||
      !this.prophetUpload.videoUrl
    ) {
      this.prophetUploadMessage = 'Add a title, description, thumbnail, and video before submitting.';
      return;
    }

    this.prophetUploadLoading = true;
    this.prophetUploadMessage = '';
    await new Promise(resolve => setTimeout(resolve, 900));

    this.prophetMessagesX774551Y886331 = [
      ...this.prophetMessagesX774551Y886331,
      {
        id: Date.now(),
        image: this.prophetUpload.thumbnailUrl || 'assets/sharing/sharing-our-faith-banner1.png',
        title: this.prophetUpload.title.trim(),
        author: 'Church Prophet',
        description: this.prophetUpload.description.trim(),
        video: this.prophetUpload.videoUrl
      }
    ];
    this.prophetUpload = {
      title: '',
      description: '',
      thumbnailUrl: '',
      videoUrl: '',
      videoFileName: ''
    };
    this.prophetUploadLoading = false;
    this.showProphetUploadModal = false;
    this.prophetUploadToast = true;
    setTimeout(() => this.prophetUploadToast = false, 3500);
  }

  playProphetVideo(index: number): void {
    this.currentSlideX774551Y886331 = index;
    const video = this.prophetVideoPlayer?.nativeElement;

    if (!video) {
      return;
    }

    video.pause();
    video.src = this.prophetMessagesX774551Y886331[index].video;
    video.load();
    video.currentTime = 0;
    this.prophetVideoProgress = 0;
    this.prophetVideoCurrentTime = '0:00';
    void video.play()
      .then(() => {
        this.prophetVideoPlaying = true;
      })
      .catch(() => {
        this.prophetVideoPlaying = false;
      });
  }

  toggleProphetVideo(): void {
    const video = this.prophetVideoPlayer?.nativeElement;

    if (!video) {
      return;
    }

    if (video.paused) {
      void video.play()
        .then(() => {
          this.prophetVideoPlaying = true;
        })
        .catch(() => {
          this.prophetVideoPlaying = false;
        });
    } else {
      video.pause();
      this.prophetVideoPlaying = false;
    }
  }

  nextProphetVideo(): void {
    const nextIndex = (this.currentSlideX774551Y886331 + 1) % this.prophetMessagesX774551Y886331.length;
    this.playProphetVideo(nextIndex);
  }

  previousProphetVideo(): void {
    const previousIndex = (this.currentSlideX774551Y886331 - 1 + this.prophetMessagesX774551Y886331.length)
      % this.prophetMessagesX774551Y886331.length;
    this.playProphetVideo(previousIndex);
  }

  onProphetVideoEnded(): void {
    this.prophetVideoPlaying = false;
  }

  toggleProphetMute(): void {
    const video = this.prophetVideoPlayer?.nativeElement;

    if (!video) {
      return;
    }

    video.muted = !video.muted;
    this.prophetVideoMuted = video.muted;
  }

  syncProphetMuteState(): void {
    const video = this.prophetVideoPlayer?.nativeElement;

    if (video) {
      this.prophetVideoMuted = video.muted;
    }
  }

  updateProphetVideoProgress(): void {
    const video = this.prophetVideoPlayer?.nativeElement;

    if (!video) {
      return;
    }

    this.prophetVideoProgress = (video.currentTime / video.duration) * 100 || 0;
    this.prophetVideoCurrentTime = this.formatProphetTime(video.currentTime);
  }

  loadProphetVideoMetadata(): void {
    const video = this.prophetVideoPlayer?.nativeElement;

    if (!video) {
      return;
    }

    this.prophetVideoTotalTime = this.formatProphetTime(video.duration);
  }

  seekProphetVideo(event: MouseEvent): void {
    const progress = event.currentTarget as HTMLElement;
    const video = this.prophetVideoPlayer?.nativeElement;

    if (!video || !video.duration || !progress.clientWidth) {
      return;
    }

    video.currentTime =
      (event.offsetX / progress.clientWidth) * video.duration;
  }

  private formatProphetTime(seconds: number): string {
    if (!Number.isFinite(seconds)) {
      return '0:00';
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

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

  discipleMessagesX774551Y886331: Array<{
    id: number;
    image: string;
    title: string;
    description: string;
    time: string;
    location?: string;
  }> = [

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

  showAllDisciples = false;
  showDiscipleForm = false;
  discipleSubmission = { title: '', message: '' };
  discipleSubmissionMessage = '';
  registrationLocation = localStorage.getItem('registrationLocation') || 'General';
  pendingDiscipleMessages: Array<{ title: string; message: string; location: string; submittedAt: string }> = [];

  get visibleDiscipleMessages() {
    const messages = this.discipleMessagesX774551Y886331
      .filter(message => (message as { location?: string }).location === this.registrationLocation || !(message as { location?: string }).location);
    return this.showAllDisciples ? messages : messages.slice(0, 3);
  }

  openDiscipleForm(): void {
    this.featureAccess.requestAccess();

    if (localStorage.getItem('guest_mode') === 'true') {
      return;
    }

    this.discipleSubmissionMessage = '';
    this.showDiscipleForm = true;
  }

  closeDiscipleForm(): void {
    this.showDiscipleForm = false;
  }

  private loadApprovedDiscipleMessages(): void {
    const stored = localStorage.getItem('approvedDiscipleMessages');
    if (!stored) {
      return;
    }

    try {
      const approved = JSON.parse(stored) as Array<{ title: string; message: string; location: string; submittedAt: string }>;
      this.discipleMessagesX774551Y886331 = [
        ...this.discipleMessagesX774551Y886331,
        ...approved.map((message, index) => ({
          id: 1000 + index,
          image: 'assets/sharing/sharing-our-faith-banner122.png',
          title: message.title,
          description: message.message,
          time: 'Recently',
          location: message.location
        }))
      ];
    } catch {
      localStorage.removeItem('approvedDiscipleMessages');
    }
  }

  submitDiscipleMessage(): void {
    if (!this.featureAccess.requireMember()) return;

    const wordCount = this.discipleSubmission.message.trim().split(/\s+/).filter(Boolean).length;
    if (!this.discipleSubmission.title.trim() || !this.discipleSubmission.message.trim() || wordCount > 2400) {
      this.discipleSubmissionMessage = 'Please provide a message of no more than four pages (approximately 2,400 words).';
      return;
    }

    const pending = JSON.parse(localStorage.getItem('pendingDiscipleMessages') || '[]');
    pending.push({
      ...this.discipleSubmission,
      location: this.registrationLocation,
      submittedAt: new Date().toISOString(),
      status: 'pending'
    });
    localStorage.setItem('pendingDiscipleMessages', JSON.stringify(pending));
    this.pendingDiscipleMessages = pending;
    this.discipleMessagesX774551Y886331 = [
      {
        id: Date.now(),
        image: 'assets/sharing/sharing-our-faith-banner122.png',
        title: this.discipleSubmission.title.trim(),
        description: this.discipleSubmission.message.trim(),
        time: 'Pending review',
        location: this.registrationLocation
      },
      ...this.discipleMessagesX774551Y886331
    ];
    this.showAllDisciples = true;
    this.showDiscipleForm = false;
    this.discipleSubmission = { title: '', message: '' };
    this.discipleSubmissionMessage = 'Thank you. Your message was submitted for review.';
  }

  approveDiscipleMessage(message: { title: string; message: string; location: string; submittedAt: string }): void {
    const pending = this.pendingDiscipleMessages.filter(item => item.submittedAt !== message.submittedAt);
    const approved = JSON.parse(localStorage.getItem('approvedDiscipleMessages') || '[]');
    approved.push(message);
    localStorage.setItem('pendingDiscipleMessages', JSON.stringify(pending));
    localStorage.setItem('approvedDiscipleMessages', JSON.stringify(approved));
    this.pendingDiscipleMessages = pending;
    this.discipleMessagesX774551Y886331 = [
      ...this.discipleMessagesX774551Y886331,
      {
        id: Date.now(),
        image: 'assets/sharing/sharing-our-faith-banner122.png',
        title: message.title,
        description: message.message,
        time: 'Recently',
        location: message.location
      }
    ];
  }

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
    this.showAllDisciples = true;

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

  scriptureSubmission = { reference: '', verses: '', comment: '' };
  postedScriptures: Array<{ reference: string; verses: string; comment: string }> = [];
  scriptureSubmissionMessage = '';

  submitScripture(): void {
    if (!this.featureAccess.requireMember()) return;

    const verseCount = this.scriptureSubmission.verses
      .split(/\n|;/)
      .map(verse => verse.trim())
      .filter(Boolean).length;
    const commentWords = this.scriptureSubmission.comment.trim().split(/\s+/).filter(Boolean).length;
    if (!this.scriptureSubmission.reference.trim() || !this.scriptureSubmission.verses.trim() || verseCount > 30 || commentWords > 60) {
      this.scriptureSubmissionMessage = 'Add a reference, no more than 30 verses, and no more than 60 comment words.';
      return;
    }

    this.postedScriptures = [
      ...this.postedScriptures,
      { ...this.scriptureSubmission }
    ];
    localStorage.setItem('postedScriptures', JSON.stringify(this.postedScriptures));
    this.scriptureSubmission = { reference: '', verses: '', comment: '' };
    this.scriptureSubmissionMessage = 'Scripture posted for everyone to view.';
  }

  private loadPostedScriptures(): void {
    const stored = localStorage.getItem('postedScriptures');
    if (!stored) {
      return;
    }

    try {
      this.postedScriptures = JSON.parse(stored);
    } catch {
      localStorage.removeItem('postedScriptures');
    }
  }

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

    button:'What is the Purpose of a Temple?'

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
      url:'https://www.churchofjesuschrist.org/study/scriptures/bd/tabernacle?lang=eng',

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
url:'https://www.churchofjesuschrist.org/study/scriptures/bd/temple-of-solomon?lang=eng',
location:"Jerusalem",
image:"assets/sharing/temples/temples-2.png",
description:"Built by King Solomon as a magnificent temple dedicated to the Lord.",
scripture:"1 Kings 6:1"
},

{
id:3,
title:"Nephi's Temple",
url:'https://www.churchofjesuschrist.org/study/scriptures/bofm/2-ne/5?lang=eng',
location:"Promised Land",
image:"assets/sharing/temples/temples-3.png",
description:"Constructed after the pattern of Solomon's Temple by the Nephites.",
scripture:"2 Nephi 5:16"
},

{
id:4,
title:"King Benjamin's Temple",
url:'https://www.churchofjesuschrist.org/study/scriptures/bofm/mosiah/2?lang=eng',
location:"Zarahemla",
image:"assets/sharing/temples/temples-4.png",
description:"King Benjamin taught his people from the temple with power and faith.",
scripture:"Mosiah 2:1"
},

{
id:5,
title:"Bountiful Temple",
url:'https://www.churchofjesuschrist.org/study/scriptures/bofm/3-ne/11?lang=eng',
location:"Bountiful",
image:"assets/sharing/temples/temples-5.png",
description:"The resurrected Jesus Christ appeared to the Nephites at this temple.",
scripture:"3 Nephi 11:1"
},

{
id:6,
title:"Herod's Temple",
url:'https://www.churchofjesuschrist.org/study/scriptures/bd/herods-temple?lang=eng',
location:"Jerusalem",
image:"assets/sharing/temples/temples-6.png",
description:"The temple where Jesus taught, healed, and cleansed the courts.",
scripture:"John 2:16"
},

{
id:7,
title:"Kirtland Temple",
url:'https://www.churchofjesuschrist.org/temples/details/kirtland-temple',
location:"Ohio",
image:"assets/sharing/temples/temples-7.png",
description:"The first temple of the Restoration where heavenly visions were received.",
scripture:"Doctrine & Covenants 110"
},

{
id:8,
title:"Nauvoo Temple",
url:'https://www.churchofjesuschrist.org/temples/details/nauvoo-illinois-temple',
location:"Illinois",
image:"assets/sharing/temples/temples-8.png",
description:"Built by faithful Saints as a sacred place of worship and ordinances.",
scripture:"Doctrine & Covenants 124"
},

{
id:9,
title:"Salt Lake Temple",
url:'https://www.churchofjesuschrist.org/temples/details/salt-lake-temple',
location:"Utah",
image:"assets/sharing/temples/temples-9.png",
description:"A worldwide symbol of faith, sacrifice, and devotion to Jesus Christ.",
scripture:"Psalm 27:4"
},

{
id:10,
title:"Kansas City Temple",
url:'https://www.churchofjesuschrist.org/temples/details/kansas-city-missouri-temple',
location:"Missouri",
image:"assets/sharing/temples/temples-10.png",
description:"A modern house of the Lord dedicated to strengthening families.",
scripture:"Isaiah 2:2"
},

{
id:11,
title:"St. George Temple",
location:"Utah",
image:"assets/sharing/temples/temples-9.png",
url:"https://www.churchofjesuschrist.org/temples/details/st-george-utah-temple",
description:"A historic temple of the Restoration and a place of covenant worship.",
scripture:"Doctrine & Covenants 109"
},

{
id:12,
title:"Jerusalem Temple",
location:"Jerusalem",
image:"assets/sharing/temples/temples-10.png",
url:"https://www.churchofjesuschrist.org/temples/details/jerusalem-center",
description:"A sacred Jerusalem setting associated with teaching, worship, and the Savior.",
scripture:"Isaiah 2:3"
}
 
];


/*==========================================================
OPEN TEMPLE
==========================================================*/

openTempleHeritageXth6284(card:any):void{
    if (card.url) {
      window.open(card.url, '_blank', 'noopener,noreferrer');
    }

}


/*==========================================================
EXPLORE ALL TEMPLES
==========================================================*/

exploreTempleHeritageXth6284():void{
    window.open(
      'https://www.churchofjesuschrist.org/temples/why-latter-day-saints-build-temples?lang=eng',
      '_blank',
      'noopener,noreferrer'
    );

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



 
