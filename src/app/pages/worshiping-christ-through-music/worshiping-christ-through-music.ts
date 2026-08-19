import { Header } from '../../components/header/header';
import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {  HostListener, OnInit } from '@angular/core';

import { ChangeDetectorRef } from '@angular/core';

@Component({
 selector: 'app-worshiping-christ-through-music',
  imports: [Header,FormsModule],
  templateUrl: './worshiping-christ-through-music.html',
  styleUrl: './worshiping-christ-through-music.scss',
})
export class WorshipingChristThroughMusic implements OnInit, AfterViewInit {

  //==========================================================
  // HERO BACKGROUND IMAGE
  //==========================================================
 
 /*==========================================================
  DESKTOP IMAGE
  ==========================================================*/

  desktopBannerImage =
  'assets/worshiping/worshiping-christ-through-music-banner.png';

  /*==========================================================
  MOBILE IMAGE
  ==========================================================*/

  mobileBannerImage =
  'assets/worshiping/worshiping-christ-through-music-mobile-banner.png';

  /*==========================================================
  CURRENT IMAGE
  ==========================================================*/

  bannerImage = '';

  /*==========================================================
  INIT
  ==========================================================*/

  ngOnInit(){

    this.nb8821UpdateBannerImage();

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

  icon: 'bi bi-music-note-beamed',

  title: 'Worshiping Christ Through Music',

  subtitle: 'Unite hearts. Lift voices. Glorify the Lord.',

  description:
    'Sing unto the Lord; bless his name: shew forth his salvation from day to day.',

  scriptureReference: 'Psalm 96:2'

};


constructor(    private cdr: ChangeDetectorRef) {}

  //==========================================================
// TOP TAB MENU
//==========================================================

activeTab = 0;

bannerTabs = [

  {
    id: 0,
    icon: 'bi bi-music-note-beamed',
    title: 'Music & Worship'
  },

  {
    id: 1,
    icon: 'bi bi-people-fill',
    title: 'Choirs You Can Join'
  },

  {
    id: 2,
    icon: 'bi bi-person-fill',
    title: 'Youth Music'
  },

  {
    id: 3,
    icon: 'bi bi-calendar-event',
    title: 'Worship Events'
  },

  {
    id: 4,
    icon: 'bi bi-heart',
    title: 'My Music'
  }

];

changeTab(index: number) {

    this.activeTab = index;

    this.cdr.detectChanges();

    setTimeout(() => {

        this.cdr.detectChanges();

        switch (index) {

            case 0:

                this.currentSong = this.musicSection.songs[0];
                this.currentIndex = 0;

                if (this.audioPlayer) {
                    this.loadSong();
                }

            break;

            case 2:

                this.currentVideo = this.videoSection.videos[0];
                this.currentIndex1 = 0;

                if (this.videoPlayer) {
                    this.loadVideo();
                }

            break;

            case 3:

                this.gc84521CurrentEvent =
                this.gc84521ConferenceData.events[0];

                this.gc84521CurrentIndex = 0;

                if (this.gc84521VideoPlayer) {
                    this.gc84521LoadCurrentVideo();
                }

            break;

            case 4:

                this.ghd6766CurrentMusic =
                this.ghd6766MusicLibrary.list[0];

                this.ghd6766CurrentIndex = 0;

                if (this.ghd6766AudioPlayer) {
                    this.ghd6766LoadCurrentMusic();
                }

            break;

        }

    }, 0);

}

/*==========================================================
START : wm8231
WORSHIP MUSIC DATA
END : qz9981
==========================================================*/

  @ViewChild('audioPlayer')
  audioPlayer!: ElementRef<HTMLAudioElement>;

  isPlaying = false;

  isMuted = false;

  progress = 0;

  currentTime = '0:00';

  totalTime = '0:00';

  currentIndex = 0;

  currentSong: any;


musicSection = {

  title: "Sacred Worship Music",

  subTitle: "Uplifting songs and instrumentals to draw closer to Christ.",

  button: "View All Music",

  songs: [

    {
      id: 1,
      title: "Sing Praises",
      artist: "Various Artists",
      duration: "3:45",
      image: "https://picsum.photos/400/400?random=101",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },

    {
      id: 2,
      title: "Come Unto Christ",
      artist: "Maegan Taylor",
      duration: "4:22",
      image: "https://picsum.photos/400/400?random=102",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },

    {
      id: 3,
      title: "Hope of Zion",
      artist: "David Tolk",
      duration: "4:28",
      image: "https://picsum.photos/400/400?random=103",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    },

    {
      id: 4,
      title: "Restoration Hymns",
      artist: "Various Artists",
      duration: "4:15",
      image: "https://picsum.photos/400/400?random=104",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    }

  ],

  current: {

    image: "https://picsum.photos/400/400?random=101",

    title: "Sing Praises",

    artist: "Various Artists",

    currentTime: "0:00",

    totalTime: "0:00",

    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"

  }

};
/*==========================================================
END
==========================================================*/

 

  loadSong() {

    const audio = this.audioPlayer.nativeElement;

    audio.src = this.currentSong.audio;

    audio.load();

  }

  selectSong(song: any) {

    this.currentSong = song;

    this.currentIndex = this.musicSection.songs.findIndex(
      x => x.id === song.id
    );

    this.loadSong();

    this.audioPlayer.nativeElement.play();

    this.isPlaying = true;

  }

  togglePlay() {

    const audio = this.audioPlayer.nativeElement;

    if (audio.paused) {

      audio.play();

      this.isPlaying = true;

    } else {

      audio.pause();

      this.isPlaying = false;

    }

  }

  previousSong() {

    this.currentIndex--;

    if (this.currentIndex < 0) {

      this.currentIndex =
        this.musicSection.songs.length - 1;

    }

    this.currentSong =
      this.musicSection.songs[this.currentIndex];

    this.loadSong();

    this.audioPlayer.nativeElement.play();

    this.isPlaying = true;

  }

  nextSong() {

    this.currentIndex++;

    if (this.currentIndex >= this.musicSection.songs.length) {

      this.currentIndex = 0;

    }

    this.currentSong =
      this.musicSection.songs[this.currentIndex];

    this.loadSong();

    this.audioPlayer.nativeElement.play();

    this.isPlaying = true;

  }

  muteAudio() {

    const audio = this.audioPlayer.nativeElement;

    audio.muted = !audio.muted;

    this.isMuted = audio.muted;

  }

  onTimeUpdate() {

    const audio = this.audioPlayer.nativeElement;

    this.progress =
      (audio.currentTime / audio.duration) * 100 || 0;

    this.currentTime =
      this.formatTime(audio.currentTime);

  }

  loadedMetadata() {

    const audio = this.audioPlayer.nativeElement;

    this.totalTime =
      this.formatTime(audio.duration);

  }

  seek(event: MouseEvent) {

    const progress =
      event.currentTarget as HTMLElement;

    const percent =
      event.offsetX / progress.clientWidth;

    const audio =
      this.audioPlayer.nativeElement;

    audio.currentTime =
      percent * audio.duration;

  }

  formatTime(seconds: number): string {

    if (isNaN(seconds)) {

      return '0:00';

    }

    const min = Math.floor(seconds / 60);

    const sec = Math.floor(seconds % 60);

    return `${min}:${sec < 10 ? '0' : ''}${sec}`;

  }




  uploadMusic(event: Event) {

  const input = event.target as HTMLInputElement;

  if (!input.files || input.files.length === 0) {

    return;

  }

  for (let i = 0; i < input.files.length; i++) {

    const file = input.files[i];

    const url = URL.createObjectURL(file);

    const audio = new Audio(url);

    const song = {

      id: Date.now() + i,

      title: file.name.replace(/\.[^/.]+$/, ""),

      artist: "Local Music",

      duration: "Loading...",

      image: "https://placehold.co/400x400/173f83/ffffff?text=Music",

      audio: url

    };

    audio.addEventListener("loadedmetadata", () => {

      const minutes = Math.floor(audio.duration / 60);

      const seconds = Math.floor(audio.duration % 60);

      song.duration = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    });

    this.musicSection.songs.push(song);

  }

}








/*==========================================================
START : ch89231
CHOIR DATA
END : kp55321
==========================================================*/

showToast:boolean=false;

toastMessage:string='';

choirData={

    title:
    "Choirs You Can Join",

    subTitle:
    "Lift your voice together in harmony.",

    notice:
    "All music uploaded may first be reviewed for worshipful and Christ-centered focus before posting.",

    list:[

        /*======================================================
        CARD 1
        ======================================================*/

        {

            id:1,

            name:"Restoration Choir",

            description:
            "The global choir of The Church of Jesus Christ of Latter-day Saints",

            time:
            "Sundays at 9:30 AM MT",

            location:
            "General Conference",

            image:
            "https://picsum.photos/600/350?random=701"

        },

        /*======================================================
        CARD 2
        ======================================================*/

        {

            id:2,

            name:"Sisters' Choir",

            description:
            "For women and young women",

            time:
            "Sundays at 2:00 PM MT",

            location:
            "General Conference",

            image:
            "https://picsum.photos/600/350?random=702"

        },

        /*======================================================
        CARD 3
        ======================================================*/

        {

            id:3,

            name:"Youth Choir",

            description:
            "For youth (Ages 14–18)",

            time:
            "Sundays at 8:00 PM MT",

            location:
            "General Conference",

            image:
            "https://picsum.photos/600/350?random=703"

        },

        /*======================================================
        CARD 4
        ======================================================*/

        {

            id:4,

            name:"Children's Choir",

            description:
            "For children (Ages 8–13)",

            time:
            "Sundays at 6:00 PM MT",

            location:
            "(First Sunday Scope)",

            image:
            "https://picsum.photos/600/350?random=704"

        }

    ]

};

/*==========================================================
JOIN BUTTON
==========================================================*/
joinChoir(item:any){

    this.toastMessage =
    "Successfully joined " + item.name + " 🎵";

    this.showToast = true;

    this.cdr.detectChanges();

    setTimeout(()=>{

        this.showToast = false;

        this.cdr.detectChanges();

    },3000);

}
/*==========================================================
END
==========================================================*/



/*==========================================================
VIDEO ELEMENT
==========================================================*/

@ViewChild('videoPlayer')
videoPlayer!:ElementRef<HTMLVideoElement>;

/*==========================================================
PLAYER VARIABLES
==========================================================*/

videoPlaying=false;

videoMuted=false;

videoProgress=0;

videoCurrentTime='0:00';

videoTotalTime='0:00';

currentIndex1=0;

currentVideo:any;

/*==========================================================
VIDEO DATA
==========================================================*/

videoSection={

title:
"Tabernacle Choir at General Conference",

subTitle:
"Experience inspiring music each conference weekend.",

videos:[

{

id:1,

title:"Watch the Latest Broadcast",

subTitle:"Saturday Afternoon Session",

thumbnail:"https://picsum.photos/800/450?random=601",

video:"https://www.w3schools.com/html/mov_bbb.mp4"

},

{

id:2,

title:"Watch the Choir Library",

subTitle:"Hundreds of past performances",

thumbnail:"https://picsum.photos/800/450?random=602",

video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"

},

{

id:3,

title:"Conference Worship",

subTitle:"Special Musical Program",

thumbnail:"https://picsum.photos/800/450?random=603",

video:"https://www.w3schools.com/html/movie.mp4"

},

{

id:4,

title:"Evening Choir",

subTitle:"Sacred Choir Collection",

thumbnail:"https://picsum.photos/800/450?random=604",

video:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"

}

]

};

/*==========================================================
INIT
==========================================================*/

ngAfterViewInit(){

    this.currentSong =
    this.musicSection.songs[0];

    this.currentIndex = 0;

    this.loadSong();

    this.cdr.detectChanges();

}
/*==========================================================
LOAD VIDEO
==========================================================*/

loadVideo(){

const video=this.videoPlayer.nativeElement;

video.src=this.currentVideo.video;

video.load();

}

/*==========================================================
SELECT VIDEO
==========================================================*/

selectVideo(item:any){

this.currentVideo=item;

this.currentIndex1=this.videoSection.videos.findIndex(

x=>x.id===item.id

);

this.loadVideo();

this.videoPlayer.nativeElement.play();

this.videoPlaying=true;

}

/*==========================================================
PLAY PAUSE
==========================================================*/

toggleVideo(){

const video=this.videoPlayer.nativeElement;

if(video.paused){

video.play();

this.videoPlaying=true;

}
else{

video.pause();

this.videoPlaying=false;

}

}

/*==========================================================
PREVIOUS
==========================================================*/

previousVideo(){

this.currentIndex1--;

if(this.currentIndex1<0){

this.currentIndex1=this.videoSection.videos.length-1;

}

this.currentVideo=this.videoSection.videos[this.currentIndex1];

this.loadVideo();

this.videoPlayer.nativeElement.play();

this.videoPlaying=true;

}

/*==========================================================
NEXT
==========================================================*/

nextVideo(){

this.currentIndex1++;

if(this.currentIndex1>=this.videoSection.videos.length){

this.currentIndex1=0;

}

this.currentVideo=this.videoSection.videos[this.currentIndex1];

this.loadVideo();

this.videoPlayer.nativeElement.play();

this.videoPlaying=true;

}

/*==========================================================
MUTE
==========================================================*/

muteVideo(){

const video=this.videoPlayer.nativeElement;

video.muted=!video.muted;

this.videoMuted=video.muted;

}

/*==========================================================
TIME UPDATE
==========================================================*/

videoTimeUpdate(){

const video=this.videoPlayer.nativeElement;

this.videoProgress=

(video.currentTime/video.duration)*100||0;

this.videoCurrentTime=

this.formatTime1(video.currentTime);

}

/*==========================================================
LOADED
==========================================================*/

videoLoaded(){

const video=this.videoPlayer.nativeElement;

this.videoTotalTime=

this.formatTime1(video.duration);

}

/*==========================================================
SEEK
==========================================================*/

seekVideo(event:MouseEvent){

const progress=

event.currentTarget as HTMLElement;

const percent=

event.offsetX/progress.clientWidth;

this.videoPlayer.nativeElement.currentTime=

percent*this.videoPlayer.nativeElement.duration;

}

fullScreen(){

  const video=this.videoPlayer.nativeElement;

  if(video.requestFullscreen){

      video.requestFullscreen();

  }

}

/*==========================================================
FORMAT
==========================================================*/

formatTime1(sec:number){

if(isNaN(sec)){

return'0:00';

}

const min=Math.floor(sec/60);

const seconds=Math.floor(sec%60);

return `${min}:${seconds<10?'0':''}${seconds}`;

}

/*==========================================================
UPLOAD LOCAL VIDEOS
==========================================================*/

uploadVideos(event:any){

const files=event.target.files;

if(!files){

return;

}

for(let i=0;i<files.length;i++){

const file=files[i];

const url=URL.createObjectURL(file);

this.videoSection.videos.push({

id:Date.now()+i,

title:file.name.replace(/\.[^/.]+$/,""),

subTitle:"Local Device",

thumbnail:"https://placehold.co/800x450/e9eef6/173f83?text=Video",

video:url

});

}

}

/*==========================================================
END
==========================================================*/


/*==========================================================
START : gc84521
GENERAL CONFERENCE DATA
END : rm99231
==========================================================*/

gc84521ConferenceData={

    title:
    "General Conference Sessions",

    subTitle:
    "Listen to sessions and music from past conferences.",

    events:[

        /*==================================================
        EVENT 1
        ==================================================*/

        {

            id:1,

            month:"Apr",

            year:"2024",

            title:
            "General Conference (April 2024)",

            subTitle:
            "Saturday Afternoon Session",

            description:
            "Tabernacle Choir",

            thumbnail:
            "https://picsum.photos/600/350?random=901",

            video:
            "https://www.w3schools.com/html/mov_bbb.mp4"

        },

        /*==================================================
        EVENT 2
        ==================================================*/

        {

            id:2,

            month:"Oct",

            year:"2023",

            title:
            "General Conference (October 2023)",

            subTitle:
            "Sunday Morning Session",

            description:
            "Tabernacle Choir",

            thumbnail:
            "https://picsum.photos/600/350?random=902",

            video:
            "https://www.w3schools.com/html/movie.mp4"

        },

        /*==================================================
        EVENT 3
        ==================================================*/

        {

            id:3,

            month:"Apr",

            year:"2023",

            title:
            "General Conference (April 2023)",

            subTitle:
            "Saturday Evening Session",

            description:
            "Tabernacle Choir",

            thumbnail:
            "https://picsum.photos/600/350?random=903",

            video:
            "https://www.w3schools.com/html/mov_bbb.mp4"

        },

        /*==================================================
        EVENT 4
        ==================================================*/

        {

            id:4,

            month:"Oct",

            year:"2022",

            title:
            "General Conference (October 2022)",

            subTitle:
            "Sunday Afternoon Session",

            description:
            "Tabernacle Choir",

            thumbnail:
            "https://picsum.photos/600/350?random=904",

            video:
            "https://www.w3schools.com/html/movie.mp4"

        }

    ]

};

/*==========================================================
CURRENT EVENT
==========================================================*/

gc84521CurrentEvent=
this.gc84521ConferenceData.events[0];

/*==========================================================
VIDEO PLAYER
==========================================================*/

@ViewChild('gc84521VideoPlayer')

gc84521VideoPlayer!:ElementRef<HTMLVideoElement>;

gc84521Playing:boolean=false;

gc84521Muted:boolean=false;

gc84521Progress:number=0;

gc84521CurrentTime:string="00:00";

gc84521TotalTime:string="00:00";

/*==========================================================
MODAL
==========================================================*/

gc84521ShowModal:boolean=false;

/*==========================================================
TOAST
==========================================================*/

gc84521ShowToast:boolean=false;

gc84521ToastMessage:string="";

/*==========================================================
FORM
==========================================================*/

gc84521Form={

    title:"",

    date:"",

    subTitle:"",

    description:"",

    thumbnail:"",

    video:""

};

/*==========================================================
UPLOAD FILES
==========================================================*/

gc84521ThumbnailFile:any=null;

gc84521VideoFile:any=null;

/*==========================================================
PLAYER INDEX
==========================================================*/

gc84521CurrentIndex:number=0;

/*==========================================================
NG AFTER VIEW INIT
==========================================================*/

 

/*==========================================================
LOAD VIDEO
==========================================================*/

gc84521LoadCurrentVideo(){

    if(!this.gc84521VideoPlayer){

        return;

    }

    const player=
    this.gc84521VideoPlayer.nativeElement;

    player.src=
    this.gc84521CurrentEvent.video;

    player.load();

}

/*==========================================================
END
==========================================================*/


/*==========================================================
OPEN MODAL
==========================================================*/

gc84521OpenModal(){

    this.gc84521ShowModal = true;

}

/*==========================================================
CLOSE MODAL
==========================================================*/

gc84521CloseModal(){

    this.gc84521ShowModal = false;

}

/*==========================================================
LISTEN EVENT
==========================================================*/

gc84521ListenEvent(item:any){

    this.gc84521CurrentEvent = item;

    this.gc84521CurrentIndex =
    this.gc84521ConferenceData.events.findIndex(
        x => x.id === item.id
    );

    this.gc84521LoadCurrentVideo();

    setTimeout(()=>{

        this.gc84521VideoPlayer.nativeElement.play();

        this.gc84521Playing = true;

    });

}

/*==========================================================
PLAY / PAUSE
==========================================================*/

gc84521PlayPause(){

    const video = this.gc84521VideoPlayer.nativeElement;

    if(video.paused){

        video.play();

        this.gc84521Playing = true;

    }
    else{

        video.pause();

        this.gc84521Playing = false;

    }

}

/*==========================================================
PREVIOUS
==========================================================*/

gc84521PreviousVideo(){

    this.gc84521CurrentIndex--;

    if(this.gc84521CurrentIndex < 0){

        this.gc84521CurrentIndex =
        this.gc84521ConferenceData.events.length-1;

    }

    this.gc84521CurrentEvent =
    this.gc84521ConferenceData.events[
        this.gc84521CurrentIndex
    ];

    this.gc84521LoadCurrentVideo();

    setTimeout(()=>{

        this.gc84521VideoPlayer.nativeElement.play();

        this.gc84521Playing = true;

    });

}

/*==========================================================
NEXT
==========================================================*/

gc84521NextVideo(){

    this.gc84521CurrentIndex++;

    if(this.gc84521CurrentIndex >=
    this.gc84521ConferenceData.events.length){

        this.gc84521CurrentIndex = 0;

    }

    this.gc84521CurrentEvent =
    this.gc84521ConferenceData.events[
        this.gc84521CurrentIndex
    ];

    this.gc84521LoadCurrentVideo();

    setTimeout(()=>{

        this.gc84521VideoPlayer.nativeElement.play();

        this.gc84521Playing = true;

    });

}

/*==========================================================
MUTE
==========================================================*/

gc84521MuteVideo(){

    const video =
    this.gc84521VideoPlayer.nativeElement;

    video.muted = !video.muted;

    this.gc84521Muted = video.muted;

}

/*==========================================================
FULLSCREEN
==========================================================*/

gc84521Fullscreen(){

    const video =
    this.gc84521VideoPlayer.nativeElement;

    if(video.requestFullscreen){

        video.requestFullscreen();

    }

}

/*==========================================================
TIME UPDATE
==========================================================*/

gc84521VideoTimeUpdate(){

    const video =
    this.gc84521VideoPlayer.nativeElement;

    this.gc84521Progress =
    (video.currentTime/video.duration)*100 || 0;

    this.gc84521CurrentTime =
    this.formatTime1(video.currentTime);

}

/*==========================================================
LOADED
==========================================================*/

gc84521VideoLoaded(){

    this.gc84521TotalTime =
    this.formatTime1(
        this.gc84521VideoPlayer.nativeElement.duration
    );

}

/*==========================================================
SEEK
==========================================================*/

gc84521SeekVideo(event:MouseEvent){

    const progress =
    event.currentTarget as HTMLElement;

    const percent =
    event.offsetX/progress.clientWidth;

    this.gc84521VideoPlayer.nativeElement.currentTime =
    percent *
    this.gc84521VideoPlayer.nativeElement.duration;

}

/*==========================================================
UPLOAD THUMBNAIL
==========================================================*/

gc84521UploadThumbnail(event:any){

    const file = event.target.files[0];

    if(!file) return;

    this.gc84521ThumbnailFile = file;

    this.gc84521Form.thumbnail =
    URL.createObjectURL(file);

}

/*==========================================================
UPLOAD VIDEO
==========================================================*/

gc84521UploadVideo(event:any){

    const file = event.target.files[0];

    if(!file) return;

    this.gc84521VideoFile = file;

    this.gc84521Form.video =
    URL.createObjectURL(file);

}

/*==========================================================
SAVE EVENT
==========================================================*/

gc84521SaveEvent(){

    this.gc84521ConferenceData.events.unshift({

        id:Date.now(),

        month:new Date(
            this.gc84521Form.date
        ).toLocaleString('en',{
            month:'short'
        }),

      year:String(

new Date(

this.gc84521Form.date

).getFullYear()

),

        title:this.gc84521Form.title,

        subTitle:this.gc84521Form.subTitle,

        description:this.gc84521Form.description,

        thumbnail:this.gc84521Form.thumbnail,

        video:this.gc84521Form.video

    });

    this.gc84521ToastMessage =
    "Event added successfully";

    this.gc84521ShowToast = true;

    setTimeout(()=>{

        this.gc84521ShowToast = false;
            this.cdr.detectChanges();

    },3000);

    this.gc84521ShowModal = false;

    this.gc84521Form={

        title:"",

        date:"",

        subTitle:"",

        description:"",

        thumbnail:"",

        video:""

    };

}









/*==========================================================
START : ghd6766
MY MUSIC DATA
END : 686shb888
==========================================================*/

ghd6766MusicLibrary={

    title:
    "My Music",

    subTitle:
    "Manage your uploaded worship music.",

    list:[

        /*==================================================
        MUSIC 1
        ==================================================*/

        {

            id:1,

            title:"How Great Thou Art",

            subTitle:"New Jerusalem Choir",

            duration:"4:32",

            image:
            "https://picsum.photos/400/400?random=1201",

            music:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"

        },

        /*==================================================
        MUSIC 2
        ==================================================*/

        {

            id:2,

            title:"Amazing Grace",

            subTitle:"Youth Worship Team",

            duration:"5:12",

            image:
            "https://picsum.photos/400/400?random=1202",

            music:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"

        },

        /*==================================================
        MUSIC 3
        ==================================================*/

        {

            id:3,

            title:"Come Unto Christ",

            subTitle:"Restoration Choir",

            duration:"3:56",

            image:
            "https://picsum.photos/400/400?random=1203",

            music:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"

        },

        /*==================================================
        MUSIC 4
        ==================================================*/

        {

            id:4,

            title:"Nearer My God",

            subTitle:"Conference Choir",

            duration:"4:18",

            image:
            "https://picsum.photos/400/400?random=1204",

            music:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"

        },

        /*==================================================
        MUSIC 5
        ==================================================*/

        {

            id:5,

            title:"Faith in Christ",

            subTitle:"Tabernacle Choir",

            duration:"5:02",

            image:
            "https://picsum.photos/400/400?random=1205",

            music:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"

        },

        /*==================================================
        MUSIC 6
        ==================================================*/

        {

            id:6,

            title:"Praise Forever",

            subTitle:"Worship Collection",

            duration:"4:47",

            image:
            "https://picsum.photos/400/400?random=1206",

            music:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"

        }

    ]

};

/*==========================================================
CURRENT MUSIC
==========================================================*/

ghd6766CurrentMusic=
this.ghd6766MusicLibrary.list[0];

/*==========================================================
VIEW CHILD
==========================================================*/

@ViewChild('ghd6766AudioPlayer')

ghd6766AudioPlayer!:ElementRef<HTMLAudioElement>;

/*==========================================================
PLAYER VARIABLES
==========================================================*/

ghd6766MusicPlaying:boolean=false;

ghd6766MusicMuted:boolean=false;

ghd6766Progress:number=0;

ghd6766CurrentTime:string="0:00";

ghd6766TotalTime:string="0:00";

ghd6766CurrentIndex:number=0;

/*==========================================================
UPLOAD MODAL
==========================================================*/

ghd6766ShowModal:boolean=false;

/*==========================================================
TOAST
==========================================================*/

ghd6766ShowToast:boolean=false;

ghd6766ToastMessage:string="";

/*==========================================================
UPLOAD FILES
==========================================================*/

ghd6766MusicFile:any=null;

ghd6766CoverFile:any=null;

/*==========================================================
FORM
==========================================================*/

ghd6766Form={

    title:"",

    subTitle:"",

    image:"",

    music:""

};

/*==========================================================
AFTER VIEW INIT
==========================================================*/

 

/*==========================================================
LOAD CURRENT MUSIC
==========================================================*/

ghd6766LoadCurrentMusic(){

    if(!this.ghd6766AudioPlayer){

        return;

    }

    const player=
    this.ghd6766AudioPlayer.nativeElement;

    player.src=
    this.ghd6766CurrentMusic.music;

    player.load();

}

/*==========================================================
END
==========================================================*/



/*==========================================================
START : ghd6766
ALL FUNCTIONS
END : 686shb888
==========================================================*/

/*==========================================================
OPEN MODAL
==========================================================*/

ghd6766OpenMusicModal(){

    this.ghd6766ShowModal=true;

}

/*==========================================================
CLOSE MODAL
==========================================================*/

ghd6766CloseMusicModal(){

    this.ghd6766ShowModal=false;

    this.ghd6766Form={

        title:"",

        subTitle:"",

        image:"",

        music:""

    };

    this.ghd6766MusicFile=null;

    this.ghd6766CoverFile=null;

}

/*==========================================================
UPLOAD MUSIC
==========================================================*/

ghd6766UploadMusicFile(event:any){

    const file=event.target.files[0];

    if(!file){

        return;

    }

    this.ghd6766MusicFile=file;

    this.ghd6766Form.music=

    URL.createObjectURL(file);

}

/*==========================================================
UPLOAD COVER
==========================================================*/

ghd6766UploadMusicCover(event:any){

    const file=event.target.files[0];

    if(!file){

        return;

    }

    this.ghd6766CoverFile=file;

    this.ghd6766Form.image=

    URL.createObjectURL(file);

}

/*==========================================================
SAVE MUSIC
==========================================================*/

ghd6766SaveMusic(){

    if(

        !this.ghd6766Form.title ||

        !this.ghd6766Form.music

    ){

        this.ghd6766Toast(

            "Please select a music file."

        );

        return;

    }

    this.ghd6766MusicLibrary.list.unshift({

        id:Date.now(),

        title:this.ghd6766Form.title,

        subTitle:this.ghd6766Form.subTitle ||

        "Uploaded Music",

        duration:"0:00",

        image:

        this.ghd6766Form.image ||

        "https://picsum.photos/400/400",

        music:

        this.ghd6766Form.music

    });

    this.ghd6766Toast(

        "Music uploaded successfully."

    );

    this.ghd6766CloseMusicModal();

}

/*==========================================================
PLAY SELECTED MUSIC
==========================================================*/

ghd6766PlaySelectedMusic(item:any){

    this.ghd6766CurrentMusic=item;

    this.ghd6766CurrentIndex=

    this.ghd6766MusicLibrary.list.findIndex(

        x=>x.id===item.id

    );

    this.ghd6766LoadCurrentMusic();

    setTimeout(()=>{

        this.ghd6766AudioPlayer.nativeElement.play();

        this.ghd6766MusicPlaying=true;

    });

}

/*==========================================================
PLAY / PAUSE
==========================================================*/

ghd6766ToggleMusicPlay(){

    const player=

    this.ghd6766AudioPlayer.nativeElement;

    if(player.paused){

        player.play();

        this.ghd6766MusicPlaying=true;

    }

    else{

        player.pause();

        this.ghd6766MusicPlaying=false;

    }

}

/*==========================================================
NEXT
==========================================================*/

ghd6766NextMusicTrack(){

    this.ghd6766CurrentIndex++;

    if(

        this.ghd6766CurrentIndex>=

        this.ghd6766MusicLibrary.list.length

    ){

        this.ghd6766CurrentIndex=0;

    }

    this.ghd6766CurrentMusic=

    this.ghd6766MusicLibrary.list[

        this.ghd6766CurrentIndex

    ];

    this.ghd6766LoadCurrentMusic();

    setTimeout(()=>{

        this.ghd6766AudioPlayer.nativeElement.play();

        this.ghd6766MusicPlaying=true;

    });

}

/*==========================================================
PREVIOUS
==========================================================*/

ghd6766PreviousMusicTrack(){

    this.ghd6766CurrentIndex--;

    if(this.ghd6766CurrentIndex<0){

        this.ghd6766CurrentIndex=

        this.ghd6766MusicLibrary.list.length-1;

    }

    this.ghd6766CurrentMusic=

    this.ghd6766MusicLibrary.list[

        this.ghd6766CurrentIndex

    ];

    this.ghd6766LoadCurrentMusic();

    setTimeout(()=>{

        this.ghd6766AudioPlayer.nativeElement.play();

        this.ghd6766MusicPlaying=true;

    });

}

/*==========================================================
MUTE
==========================================================*/

ghd6766MuteMusic(){

    const player=

    this.ghd6766AudioPlayer.nativeElement;

    player.muted=!player.muted;

    this.ghd6766MusicMuted=

    player.muted;

}

/*==========================================================
TIME UPDATE
==========================================================*/

ghd6766MusicTimeUpdate(){

    const player=

    this.ghd6766AudioPlayer.nativeElement;

    this.ghd6766Progress=

    (player.currentTime/

    player.duration)*100||0;

    this.ghd6766CurrentTime=

    this.ghd6766FormatMusicTime(

        player.currentTime

    );

}

/*==========================================================
LOADED
==========================================================*/

ghd6766MusicLoaded(){

    this.ghd6766TotalTime=

    this.ghd6766FormatMusicTime(

        this.ghd6766AudioPlayer

        .nativeElement.duration

    );

}

/*==========================================================
SEEK
==========================================================*/

ghd6766SeekMusic(event:MouseEvent){

    const progress=

    event.currentTarget as HTMLElement;

    const percent=

    event.offsetX/

    progress.clientWidth;

    this.ghd6766AudioPlayer

    .nativeElement.currentTime=

    percent*

    this.ghd6766AudioPlayer

    .nativeElement.duration;

}

/*==========================================================
FORMAT TIME
==========================================================*/

ghd6766FormatMusicTime(sec:number){

    if(isNaN(sec)){

        return "0:00";

    }

    const min=

    Math.floor(sec/60);

    const seconds=

    Math.floor(sec%60);

    return `${min}:${seconds<10?'0':''}${seconds}`;

}

/*==========================================================
DELETE MUSIC
==========================================================*/

ghd6766DeleteMusic(id:number){

    this.ghd6766MusicLibrary.list=

    this.ghd6766MusicLibrary.list.filter(

        x=>x.id!==id

    );

    this.ghd6766Toast(

        "Music deleted successfully."

    );

}

/*==========================================================
TOAST
==========================================================*/

ghd6766Toast(message:string){

    this.ghd6766ToastMessage=

    message;

    this.ghd6766ShowToast=true;

    setTimeout(()=>{

        this.ghd6766ShowToast=false;

    },3000);

}

/*==========================================================
END
==========================================================*/


}