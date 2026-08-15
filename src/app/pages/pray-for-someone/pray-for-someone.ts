import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { timer, Subscription } from 'rxjs';
import { Header } from '../../components/header/header';


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
    Header
  ],
  templateUrl:'./pray-for-someone.html',
  styleUrl:'./pray-for-someone.scss'
})

export class PrayForSomeone implements OnInit {

   async ngOnInit() {

  // await this.refreshPrayerList();

}

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

get filteredPrayerRequests() {

  let data = [...this.prayerRequests];

  // Search

  if (this.searchText.trim()) {

    data = data.filter(item =>

      item.title.toLowerCase().includes(this.searchText.toLowerCase()) ||

      item.description.toLowerCase().includes(this.searchText.toLowerCase()) ||

      item.requestedBy.toLowerCase().includes(this.searchText.toLowerCase())

    );

  }

  return data;

}

//==================================================

changeFilter(filter: string) {

  this.selectedFilter = filter;

}

//==================================================

async refreshPrayerList() {

  if (this.isLoading) {
    return;
  }

  this.isLoading = true;

  await new Promise(resolve => setTimeout(resolve, 2000));

  this.isLoading = false;

}

//==================================================

private toastSubscription?: Subscription;

showThankYouToast() {
  this.showToast = true;

  this.toastSubscription?.unsubscribe();

  this.toastSubscription = timer(3000).subscribe(() => {
    this.showToast = false;
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

}