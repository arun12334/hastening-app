import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { FormsModule } from '@angular/forms';
import { Footer } from '../../components/footer/footer';


@Component({
  selector: 'app-register-now',
  imports: [Header, Footer, FormsModule],
  templateUrl: './register-now.html',
  styleUrl: './register-now.scss',
})
export class RegisterNow {

  /*==========================================================
  REGISTER HERO DATA x56563 y76776
  ==========================================================*/

  registerHeroBannerX56563Y76776 = {

    title: 'Join the Hastening Community',

    subTitle: 'Register Now',

    verse:
      'United in Christ. Strengthened by Scripture. Gathered in Love.',

    description:
      'Become part of a growing worldwide community focused on faith, service, unity, worship, and preparing for Zion.',

    buttonText: 'Register Today',

    buttonIcon: 'bi bi-person-plus-fill',

    backgroundImage:
      'assets/worshiping/worshiping-christ-through-music-banner.png'

  };

 
  /*==========================================================
  REGISTER CLICK
  ==========================================================*/

  registerNowClickX56563Y76776(){

    console.log('Register Click');

  }












  /*==========================================================
  PERSONAL INFORMATION
  X977563-Y966776
  ==========================================================*/

  personalInformationX977563Y966776 = {

    firstName: '',

    lastName: '',

    streetAddress: '',

    city: '',

    state: '',

    country: '',

    zipCode: '',

    mobileNumber: '',

    emailAddress: ''

  };

  /*==========================================================
  COUNTRIES
  ==========================================================*/

  countriesX977563Y966776 = [

    'Select Country',

    'United States',

    'Canada',

    'United Kingdom',

    'Australia',

    'India',

    'New Zealand',

    'South Africa',

    'Singapore',

    'Malaysia',

    'Philippines'

  ];

  /*==========================================================
  REGISTRATION OPTIONS
  ==========================================================*/

  registrationOptionsX977563Y966776 = [

    {

      id:1,

      title:'Request Access to All Hastening App Features',

      description:'Access groups, scriptures, fellowship events, prayer circles and more.',

      icon:'bi bi-star-fill',

      color:'#133F8D',

      selected:false

    },

    {

      id:2,

      title:'Join Emma’s Relief Society',

      description:'Connect with faithful women through service and scripture study.',

      icon:'bi bi-flower1',

      color:'#8A2C92',

      selected:false

    },

    {

      id:3,

      title:'Request a Free Book of Mormon',

      description:'Receive a complimentary Book of Mormon and study resources.',

      icon:'bi bi-book-fill',

      color:'#0B7B80',

      selected:false,

      deliveryMethod:'mail'

    },

    {

      id:4,

      title:'Request Enrolment for Children',

      description:'Register children for Christ-centered youth opportunities.',

      icon:'bi bi-people-fill',

      color:'#D98A07',

      selected:false

    }

  ];

  /*==========================================================
  CHILDREN
  ==========================================================*/

  childrenX977563Y966776 = [

    {

      name:'',

      age:''

    }

  ];

  /*==========================================================
  TERMS
  ==========================================================*/

  termsConditionsX977563Y966776 = [

    {

      id:1,

      text:'I have read and agree to the Terms of Service.',

      checked:false

    },

    {

      id:2,

      text:'I have read and agree to the Privacy Policy.',

      checked:false

    },

    {

      id:3,

      text:'I understand community standards and respectful participation.',

      checked:false

    },

    {

      id:4,

      text:'I consent to the collection and use of my information.',

      checked:false

    }

  ];

  /*==========================================================
  FEATURED SCRIPTURE
  ==========================================================*/

  featuredScriptureX977563Y966776 = {

    title:'Featured Scripture',

    verse:'"That they all may be one; as thou, Father, art in me, and I in thee."',

    reference:'John 17:21',

    image:'https://picsum.photos/300/180?random=977563'

  };

  /*==========================================================
  ADD CHILD
  ==========================================================*/

  addChildRowX977563Y966776(){

    this.childrenX977563Y966776.push({

      name:'',

      age:''

    });

  }

  /*==========================================================
  REMOVE CHILD
  ==========================================================*/

  removeChildRowX977563Y966776(index:number){

    if(this.childrenX977563Y966776.length>1){

      this.childrenX977563Y966776.splice(index,1);

    }

  }

  /*==========================================================
  OPTION SELECT
  ==========================================================*/

  optionSelectionX977563Y966776(option:any){

    option.selected=!option.selected;

  }

  /*==========================================================
  TERMS SELECT
  ==========================================================*/

  termsSelectionX977563Y966776(term:any){

    term.checked=!term.checked;

  }

  /*==========================================================
  REGISTER
  ==========================================================*/

  registerNowX977563Y966776(){

    console.log('Personal Information');

    console.log(this.personalInformationX977563Y966776);

    console.log('Registration');

    console.log(this.registrationOptionsX977563Y966776);

    console.log('Children');

    console.log(this.childrenX977563Y966776);

    console.log('Terms');

    console.log(this.termsConditionsX977563Y966776);

  }

}
