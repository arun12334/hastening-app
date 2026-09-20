import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { firstValueFrom, timer, Subscription } from 'rxjs';
import { Header } from '../../components/header/header';
import { ChangeDetectorRef } from '@angular/core';
import {  HostListener, OnInit } from '@angular/core';
import { FeatureAccess } from '../../services/feature-access';
import { HttpClient } from '@angular/common/http';

declare var bootstrap: any;


interface PrayerRequest {

  id:number;

  initials:string;

  avatarColor:string;

  title:string;

  description:string;

  category?: string;

  requestedBy:string;

  relation:string;

  date:string;

  prayerCount:number;

  expires:string;

  prayed:boolean;

  createdAt?: number;

}

interface PrayerAuthPayload {
  user_id: number;
  token: string;
  public_key: string;
}

@Component({
  selector: 'app-pray-for-someone',
  standalone:true,
  imports:[
    CommonModule,
    FormsModule,
    Header,
  ],
  templateUrl:'./pray-for-someone.html',
  styleUrl:'./pray-for-someone.scss'
})

export class PrayForSomeone implements OnInit {

   async ngOnInit() {

   this.loadPendingPrayerRequests();
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
  private cdr: ChangeDetectorRef,
  private readonly featureAccess: FeatureAccess,
  private readonly http: HttpClient
) {this.nb8821UpdateBannerImage();}

  private readonly prayersApiUrl = 'https://hastening.org/api';

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

async pray(request: PrayerRequest): Promise<void> {
  this.featureAccess.requestAccess();

  if (localStorage.getItem('guest_mode') === 'true') {
    return;
  }

  if (request.prayed || this.isLoading) {
    return;
  }

  const auth = this.getPrayerAuthPayload();
  if (!auth) {
    console.warn('[Prayer] Cannot offer prayer without login credentials.');
    return;
  }

  this.isLoading = true;
  try {
    console.info('[Prayer] Sending list payload:', auth);
    const response = await firstValueFrom(this.http.post<{
      success: boolean;
      message: string;
      prayer_count?: number;
      total_prayers?: number;
    }>(`${this.prayersApiUrl}/prayerslist.php`, {
      ...auth,
      action: 'offer',
      prayer_id: request.id
    }));

    console.info('[Prayer] Offer API response:', response);
    if (!response.success) {
      throw new Error(response.message || 'Prayer offering could not be saved.');
    }

    request.prayed = true;
    request.prayerCount = response.prayer_count ?? request.prayerCount + 1;
    this.totalPrayersOffered = response.total_prayers ?? this.totalPrayersOffered + 1;
    this.showThankYouToast();
  } catch (error) {
    console.error('[Prayer] Offer API request failed:', error);
  } finally {
    this.isLoading = false;
    this.cdr.markForCheck();
  }
}

// ====================================
// Search & Filter
// ====================================

searchText: string = '';

selectedFilter: string = 'All';

readonly prayerPageSize = 20;
prayerCurrentPage = 1;

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

  const twoWeeks = 14 * 24 * 60 * 60 * 1000;
  data = data.filter(item => !item.createdAt || Date.now() - item.createdAt < twoWeeks);

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

    data = data.filter(item => this.matchesPrayerFilter(item));

  }

  return data;

}

get paginatedPrayerRequests(): PrayerRequest[] {
  const start = (this.prayerCurrentPage - 1) * this.prayerPageSize;
  return this.filteredPrayerRequests.slice(start, start + this.prayerPageSize);
}

get prayerTotalPages(): number {
  return Math.max(1, Math.ceil(this.filteredPrayerRequests.length / this.prayerPageSize));
}

get prayerPageNumbers(): number[] {
  const totalPages = this.prayerTotalPages;
  const pages = new Set<number>([1, totalPages, this.prayerCurrentPage]);
  if (this.prayerCurrentPage > 1) {
    pages.add(this.prayerCurrentPage - 1);
  }
  if (this.prayerCurrentPage < totalPages) {
    pages.add(this.prayerCurrentPage + 1);
  }
  return [...pages].filter((page) => page >= 1 && page <= totalPages).sort((a, b) => a - b);
}

goToPrayerPage(page: number): void {
  if (page >= 1 && page <= this.prayerTotalPages) {
    this.prayerCurrentPage = page;
  }
}

private matchesPrayerFilter(item: PrayerRequest): boolean {
  const filter = this.selectedFilter.toLowerCase();
  if (filter === 'all') {
    return true;
  }

  const category = (item.category ?? '').toLowerCase();
  const title = item.title.toLowerCase();
  const description = item.description.toLowerCase();
  const relation = item.relation.toLowerCase();

  switch (filter) {
    case 'healing':
      return category === 'healing' || title.includes('healing') || description.includes('healing');
    case 'family':
      return category === 'family' || relation === 'family';
    case 'financial':
      return category.includes('financial') || title.includes('financial') || description.includes('financial');
    case 'peace':
      return category === 'peace' || title.includes('peace') || description.includes('peace');
    case 'guidance':
      return category.includes('guidance') || title.includes('guidance') || description.includes('guidance');
    default:
      return category === filter;
  }
}
//==================================================

changeFilter(filter: string) {

  this.selectedFilter = filter;
  this.prayerCurrentPage = 1;

}

//==================================================


async refreshPrayerList(): Promise<void> {

  if (this.isLoading) return;

  this.isLoading = true;

 try {
   if (localStorage.getItem('guest_mode') === 'true') {
     await new Promise(resolve => setTimeout(resolve, 300));
     return;
   }

   const auth = this.getPrayerAuthPayload();
   if (!auth) {
     console.warn('[Prayer] Live list skipped because user credentials are unavailable.');
     return;
   }

   const response = await firstValueFrom(this.http.post<{
     success: boolean;
     message: string;
     prayers?: unknown[];
     my_prayers?: unknown[];
     total_prayers?: number;
   }>(`${this.prayersApiUrl}/prayerslist.php`, auth));

   console.info('[Prayer] List API response:', response);
   if (!response?.success) {
     throw new Error(response?.message || 'Prayer list could not be loaded.');
   }

   this.prayerRequests = (response.prayers ?? []).map((item) => this.mapPrayerRequest(item));
   this.myPrayerOffered = (response.my_prayers ?? []).map((item) => this.mapPrayerRequest(item));
   this.totalPrayersOffered = response.total_prayers ?? this.totalPrayersOffered;
 } catch (error) {
   console.error('[Prayer] List API request failed:', error);
 } finally {
   this.isLoading = false;
   this.cdr.markForCheck();
 }

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

{ id:1, name:'Self' },

{ id:2, name:'Family' },

{ id:3, name:'Loved One' }

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

pendingPrayerRequestsXrp9284: PrayerRequest[] = [];

/*==========================================================
TOAST
==========================================================*/

showToast2 = false;

/*==========================================================
OPEN MODAL
==========================================================*/

openPrayerRequestModalXrp9284(){
 this.featureAccess.requestAccess();

 if (localStorage.getItem('guest_mode') === 'true') {
   return;
 }

 const modal = new bootstrap.Modal(
   document.getElementById('xrp9284PrayerModal')
 );
 modal.show();

}

/*==========================================================
SUBMIT
==========================================================*/

async submitPrayerRequestXrp9284(): Promise<void> {

if(

!this.prayerRequestFormXrp9284.title ||

!this.prayerRequestFormXrp9284.description ||

!this.prayerRequestFormXrp9284.requestedBy

){

alert("Please complete all required fields.");

return;

}

const activeSubmittedRequests = this.myPrayerOffered.filter(request => request.createdAt).length;
if (activeSubmittedRequests + this.pendingPrayerRequestsXrp9284.length >= 3) {
  alert('You may have a maximum of three prayer requests outstanding at one time.');
  return;
}

const auth = this.getPrayerAuthPayload();
if (!auth) {
  console.error('[Prayer] Request submission stopped because user credentials are unavailable.');
  alert('Your login session is unavailable. Please log in again and try again.');
  return;
}

const requestPayload = {
  ...auth,
  requested_by: this.prayerRequestFormXrp9284.requestedBy.trim(),
  email: this.prayerRequestFormXrp9284.email.trim(),
  title: this.prayerRequestFormXrp9284.title.trim(),
  description: this.prayerRequestFormXrp9284.description.trim(),
  category: this.prayerRequestFormXrp9284.category,
  relation: this.prayerRequestFormXrp9284.relation,
  private_prayer: this.prayerRequestFormXrp9284.privatePrayer
};

console.info('[Prayer] Sending request payload:', requestPayload);

try {
  const response = await firstValueFrom(this.http.post<{
    success: boolean;
    message: string;
  }>(`${this.prayersApiUrl}/prayerslistrequset.php`, requestPayload));
  console.info('[Prayer] Request API response:', response);
  if (!response.success) {
    throw new Error(response.message || 'Prayer request could not be submitted.');
  }
} catch (error) {
  console.error('[Prayer] Request API failed:', error);
  alert(error instanceof Error ? error.message : 'Prayer request could not be submitted.');
  return;
}

const today = new Date();

const prayer: PrayerRequest = {

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

prayer.createdAt = today.getTime();

/*--------------------------------
SAVE FOR REVIEW
--------------------------------*/

/*--------------------------------
SAVE HISTORY
--------------------------------*/

this.submittedPrayerRequestsXrp9284.unshift(prayer);
this.myPrayerOffered.unshift(prayer);

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

await this.refreshPrayerList();

}

private loadPendingPrayerRequests(): void {
  const stored = localStorage.getItem('pendingPrayerRequests');
  if (!stored) {
    return;
  }

  try {
    this.pendingPrayerRequestsXrp9284 = JSON.parse(stored) as PrayerRequest[];
  } catch {
    localStorage.removeItem('pendingPrayerRequests');
  }
}

private getPrayerAuthPayload(): PrayerAuthPayload | null {
  const storedProfile = localStorage.getItem('user_profile_info');
  if (!storedProfile) {
    return null;
  }

  try {
    const profile = JSON.parse(storedProfile) as {
      users?: Array<{ id?: number; token?: string; publicKey?: string; public_key?: string }>;
    };
    const user = profile.users?.[0];
    const publicKey = user?.publicKey ?? user?.public_key;
    if (!user?.id || !user.token || !publicKey) {
      return null;
    }
    return {
      user_id: user.id,
      token: user.token,
      public_key: publicKey
    };
  } catch (error) {
    console.error('[Prayer] Invalid user_profile_info:', error);
    return null;
  }
}

private mapPrayerRequest(value: unknown): PrayerRequest {
  const item = value as Record<string, unknown>;
  const requestedBy = String(item['requested_by'] ?? item['requestedBy'] ?? 'Anonymous');
  const createdAt = item['created_at']
    ? new Date(String(item['created_at'])).getTime()
    : Date.now();
  return {
    id: Number(item['id'] ?? createdAt),
    initials: requestedBy.split(/\s+/).map((part) => part[0] ?? '').join('').toUpperCase(),
    avatarColor: String(item['avatar_color'] ?? '#E7F0FF'),
    title: String(item['title'] ?? ''),
    description: String(item['description'] ?? ''),
    category: String(item['category'] ?? ''),
    requestedBy,
    relation: String(item['relation'] ?? 'Self'),
    date: new Date(createdAt).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }),
    prayerCount: Number(item['prayer_count'] ?? 0),
    expires: item['expires_at']
      ? new Date(String(item['expires_at'])).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      })
      : '',
    prayed: Boolean(item['prayed']),
    createdAt
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

    data = data.filter(item => this.matchesPrayerFilter(item));

  }

  return data;

}




private searchTimeout: any;

onSearchChange() {

  this.isLoading = true;
this.prayerCurrentPage = 1;

  clearTimeout(this.searchTimeout);

  this.searchTimeout = setTimeout(() => {

    // The getter will automatically use searchText
    this.isLoading = false;

    this.cdr.markForCheck();

  }, 500);

}

}