import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { timer, Subscription } from 'rxjs';
import { Header } from '../../components/header/header';
import { ChangeDetectorRef } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import {  HostListener, OnInit } from '@angular/core';

declare var bootstrap: any;


interface PrayerRequest {

  id:number;

  initials:string;

  avatarColor:string;

  title:string;

  description:string;

  requestedBy:string;

  relation:string;

  date:string;

  prayerCount:number;

  expires:string;

  prayed:boolean;

}

@Component({
  selector: 'app-pray-for-someone',
  standalone:true,
  imports:[
    CommonModule,
    FormsModule,
    Header,
    Footer
  ],
  templateUrl:'./pray-for-someone.html',
  styleUrl:'./pray-for-someone.scss'
})

export class PrayForSomeone implements OnInit {

   async ngOnInit() {

  await this.refreshPrayerList();


}




 /*==========================================================
  DESKTOP IMAGE
  ==========================================================*/

  desktopBannerImage =
  'assets/loving/pray-for-someone-banner.png';

  /*==========================================================
  MOBILE IMAGE
  ==========================================================*/

  mobileBannerImage =
  'assets/loving/pray-for-someone-mobile-banner.png';

  /*==========================================================
  CURRENT IMAGE
  ==========================================================*/

  bannerImage = '';

  
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




constructor(
  private cdr: ChangeDetectorRef
   
) {this.nb8821UpdateBannerImage();}

  //----------------------------------------
  // Active Tab
  //----------------------------------------


  activeTab:number=1;

  //----------------------------------------
  // Prayer Statistics
  //----------------------------------------

  totalPrayersOffered:number=1246;

  //----------------------------------------
  // Prayer Requests
  //----------------------------------------

  prayerRequests:PrayerRequest[]=[

    {

      id:1,

      initials:'JM',

      avatarColor:'#E7F0FF',

      title:'Healing and Strength',

      description:'Please pray for my mother Joan, who is recovering from surgery. Pray for quick healing, renewed strength, peace, and complete restoration.',

      requestedBy:'Jane M.',

      relation:'Self',

      date:'Apr 30, 2025',

      prayerCount:12,

      expires:'May 14',

      prayed:false

    },

    {

      id:2,

      initials:'BR',

      avatarColor:'#F5E8FF',

      title:'Wisdom in a Decision',

      description:'Please pray for guidance as I seek God’s direction regarding a new job opportunity and future career path.',

      requestedBy:'Brian R.',

      relation:'Self',

      date:'Apr 29, 2025',

      prayerCount:8,

      expires:'May 13',

      prayed:false

    },

    {

      id:3,

      initials:'AK',

      avatarColor:'#EAF7E8',

      title:'Peace and Comfort',

      description:'Please pray for our family as we grieve the loss of our beloved father. Pray for comfort, hope, and strength.',

      requestedBy:'Anna K.',

      relation:'Family',

      date:'Apr 28, 2025',

      prayerCount:24,

      expires:'May 12',

      prayed:false

    },

    {

      id:4,

      initials:'TL',

      avatarColor:'#FFF1DD',

      title:'Help with Anxiety',

      description:'Please pray that I can feel God’s peace and overcome anxiety and fear during this difficult season.',

      requestedBy:'Thomas L.',

      relation:'Self',

      date:'Apr 27, 2025',

      prayerCount:6,

      expires:'May 11',

      prayed:false

    },

    {

      id:5,

      initials:'MC',

      avatarColor:'#E7F7F7',

      title:'Financial Breakthrough',

      description:'Pray for our family as we seek employment opportunities and financial stability. May God provide every need.',

      requestedBy:'Michael C.',

      relation:'Family',

      date:'Apr 26, 2025',

      prayerCount:18,

      expires:'May 10',

      prayed:false

    },

    {

      id:6,

      initials:'SR',

      avatarColor:'#FFF6E2',

      title:'Safe Travel',

      description:'Please pray for protection and safety as my daughter travels overseas for her studies.',

      requestedBy:'Sarah R.',

      relation:'Child',

      date:'Apr 25, 2025',

      prayerCount:14,

      expires:'May 09',

      prayed:false

    }

  ];



  //----------------------------------------
  // My Prayer Offered
  //----------------------------------------

  myPrayerOffered:PrayerRequest[]=[

    {

      id:101,

      initials:'AD',

      avatarColor:'#EAF6FF',

      title:'Healing for a Friend',

      description:'Prayed for David recovering after an accident.',

      requestedBy:'Andrew D.',

      relation:'Friend',

      date:'Apr 25, 2025',

      prayerCount:1,

      expires:'Completed',

      prayed:true

    },

    {

      id:102,

      initials:'JT',

      avatarColor:'#FFF4E4',

      title:'Marriage Blessing',

      description:'Prayed for a newly married couple seeking God’s guidance.',

      requestedBy:'John T.',

      relation:'Family',

      date:'Apr 24, 2025',

      prayerCount:1,

      expires:'Completed',

      prayed:true

    }

  ];



  //----------------------------------------
  // Change Tab
  //----------------------------------------

  changeTab(tab:number){

    this.activeTab=tab;

  }

  //----------------------------------------
  // I've Prayed Button
  //----------------------------------------

pray(request: PrayerRequest) {

  if (!request.prayed) {

    request.prayed = true;

    request.prayerCount++;

    this.totalPrayersOffered++;

    this.showThankYouToast();

  }

}

// ====================================
// Search & Filter
// ====================================

searchText: string = '';

selectedFilter: string = 'All';

isLoading: boolean = false;

showToast: boolean = false;

// Filter Chips

filterList: string[] = [
  'All',
  'Healing',
  'Family',
  'Financial',
  'Peace',
  'Guidance'
];



  //==================================================
// SEARCH
//==================================================

/*==================================================
SEARCH + FILTER
==================================================*/

get filteredPrayerRequests(): PrayerRequest[] {

  let data = [...this.prayerRequests];

  /*--------------------------------------
  SEARCH
  --------------------------------------*/

  if (this.searchText.trim()) {

    const search = this.searchText.toLowerCase();

    data = data.filter(item =>

      item.title.toLowerCase().includes(search) ||

      item.description.toLowerCase().includes(search) ||

      item.requestedBy.toLowerCase().includes(search)

    );

  }

  /*--------------------------------------
  FILTER
  --------------------------------------*/

  if (this.selectedFilter !== 'All') {

    data = data.filter(item => {

      switch (this.selectedFilter) {

        case 'Healing':
          return item.title.toLowerCase().includes('healing');

        case 'Family':
          return item.relation === 'Family';

        case 'Financial':
          return item.title.toLowerCase().includes('financial') ||
                 item.description.toLowerCase().includes('financial');

        case 'Peace':
          return item.title.toLowerCase().includes('peace') ||
                 item.description.toLowerCase().includes('peace');

        case 'Guidance':
          return item.title.toLowerCase().includes('guidance') ||
                 item.description.toLowerCase().includes('guidance');

        default:
          return true;

      }

    });

  }

  return data;

}
//==================================================

changeFilter(filter: string) {

  this.selectedFilter = filter;

}

//==================================================


async refreshPrayerList() {

  if (this.isLoading) return;

  this.isLoading = true;

  await new Promise(resolve => setTimeout(resolve, 2000));

  this.isLoading = false;


  this.cdr.markForCheck();

 

}

//==================================================

private toastSubscription?: Subscription;

showThankYouToast() {

      this.cdr.markForCheck();
  this.showToast = true;

  this.toastSubscription?.unsubscribe();

  this.toastSubscription = timer(3000).subscribe(() => {
    this.showToast = false;
        this.cdr.markForCheck();
    console.log("lodder flase");
    
  });
}




    bannerData = {

        id: "er82443-pray-banner-vg822982",

        /*------------------------------------------
        Banner Images
        ------------------------------------------*/

        bannerImage:
        "assets/home/home-banner.png",

        bannerImageMobile:
      "assets/home/home-banner.png",

        /*------------------------------------------
        Icon
        ------------------------------------------*/

        icon:
        "bi bi-heart",

        /*------------------------------------------
        Heading
        ------------------------------------------*/

        title:
        "Lift and receive prayers in faith.",

        /*------------------------------------------
        Description
        ------------------------------------------*/

        description:
        "The effectual fervent prayer of a righteous man availeth much.",

        /*------------------------------------------
        Bible Verse
        ------------------------------------------*/

        verse:
        "James 5:16"

    }



/*==========================================================
PRAYER CATEGORY
==========================================================*/

prayerCategoriesXrp9284 = [

{ id:1, name:'Healing' },

{ id:2, name:'Family' },

{ id:3, name:'Faith & Spiritual Growth' },

{ id:4, name:'Financial Needs' },

{ id:5, name:'Thanksgiving' },

{ id:6, name:'Guidance & Wisdom' },

{ id:7, name:'Salvation' },

{ id:8, name:'Church Ministry' },

{ id:9, name:'Employment' },

{ id:10, name:'Other' }

];

/*==========================================================
PRAYER FOR
==========================================================*/

prayerForListXrp9284 = [

{ id:1, name:'Myself' },

{ id:2, name:'My Family' },

{ id:3, name:'Friend' },

{ id:4, name:'Parents' },

{ id:5, name:'Child' },

{ id:6, name:'Church' },

{ id:7, name:'Community' },

{ id:8, name:'Someone Else' }

];

/*==========================================================
FORM MODEL
==========================================================*/
/*==========================================================
FORM MODEL
==========================================================*/

prayerRequestFormXrp9284 = {

title:'',

description:'',

requestedBy:'',

relation:'Self',

email:'',

category:'Healing',

privatePrayer:false

};
/*==========================================================
SUBMITTED REQUESTS
(JSON STORAGE)
==========================================================*/

submittedPrayerRequestsXrp9284:any[] = [];

/*==========================================================
TOAST
==========================================================*/

showToast2 = false;

/*==========================================================
OPEN MODAL
==========================================================*/

openPrayerRequestModalXrp9284(){

const modal = new bootstrap.Modal(

document.getElementById('xrp9284PrayerModal')

);

modal.show();

}

/*==========================================================
SUBMIT
==========================================================*/

submitPrayerRequestXrp9284(){

if(

!this.prayerRequestFormXrp9284.title ||

!this.prayerRequestFormXrp9284.description ||

!this.prayerRequestFormXrp9284.requestedBy

){

alert("Please complete all required fields.");

return;

}

const today = new Date();

const prayer = {

id: Date.now(),

initials: this.prayerRequestFormXrp9284.requestedBy

.split(' ')

.map((x:any)=>x[0])

.join('')

.toUpperCase(),

avatarColor:'#E7F0FF',

title:this.prayerRequestFormXrp9284.title,

description:this.prayerRequestFormXrp9284.description,

requestedBy:this.prayerRequestFormXrp9284.requestedBy,

relation:this.prayerRequestFormXrp9284.relation,

date:today.toLocaleDateString('en-US',{

month:'short',

day:'numeric',

year:'numeric'

}),

prayerCount:0,

expires:new Date(

today.getTime()+14*24*60*60*1000

).toLocaleDateString('en-US',{

month:'short',

day:'numeric'

}),

prayed:false

};

/*--------------------------------
ADD TO PRAYER LIST
--------------------------------*/

this.prayerRequests.unshift(prayer);

/*--------------------------------
SAVE HISTORY
--------------------------------*/

this.submittedPrayerRequestsXrp9284.unshift(prayer);

/*--------------------------------
CLOSE MODAL
--------------------------------*/

bootstrap.Modal
.getInstance(
document.getElementById("xrp9284PrayerModal")
)
.hide();

/*--------------------------------
SHOW TOAST
--------------------------------*/

this.showToast2 = true;

setTimeout(()=>{

this.showToast2=false;

},3000);

/*--------------------------------
RESET FORM
--------------------------------*/

this.prayerRequestFormXrp9284={

title:'',

description:'',

requestedBy:'',

relation:'Self',

email:'',

category:'Healing',

privatePrayer:false

};

}

/*==========================================================
VIEW ALL REQUESTS
==========================================================*/

viewPrayerRequestsXrp9284(){

console.log(this.submittedPrayerRequestsXrp9284);

}


get filteredMyPrayerOffered(): PrayerRequest[] {

  let data = [...this.myPrayerOffered];

  if (this.searchText.trim()) {

    const search = this.searchText.toLowerCase();

    data = data.filter(item =>

      item.title.toLowerCase().includes(search) ||

      item.description.toLowerCase().includes(search) ||

      item.requestedBy.toLowerCase().includes(search)

    );

  }

  if (this.selectedFilter !== 'All') {

    data = data.filter(item => {

      switch (this.selectedFilter) {

        case 'Healing':
          return item.title.toLowerCase().includes('healing');

        case 'Family':
          return item.relation === 'Family';

        case 'Financial':
          return item.title.toLowerCase().includes('financial') ||
                 item.description.toLowerCase().includes('financial');

        case 'Peace':
          return item.title.toLowerCase().includes('peace') ||
                 item.description.toLowerCase().includes('peace');

        case 'Guidance':
          return item.title.toLowerCase().includes('guidance') ||
                 item.description.toLowerCase().includes('guidance');

        default:
          return true;

      }

    });

  }

  return data;

}




private searchTimeout: any;

onSearchChange() {

  this.isLoading = true;

  clearTimeout(this.searchTimeout);

  this.searchTimeout = setTimeout(() => {

    // The getter will automatically use searchText
    this.isLoading = false;

    this.cdr.markForCheck();

  }, 500);

}

}