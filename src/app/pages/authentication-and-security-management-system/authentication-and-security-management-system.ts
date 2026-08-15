import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';  
@Component({
  selector: 'app-authentication-and-security-management-system',
  imports: [Header, Footer],
  templateUrl: './authentication-and-security-management-system.html',
  styleUrl: './authentication-and-security-management-system.scss',
})
export class AuthenticationAndSecurityManagementSystem {




  /*==========================================================
BANNER IMAGE X91
==========================================================*/

authenticationSecurityBannerImageX91 =
'assets/authentication/authentication-and-security-banner.png';

/*==========================================================
BANNER CONTENT X91
==========================================================*/

authenticationSecurityBannerX91 = {

  icon:'bi bi-shield-lock',

  title:'Authentication & Security',

  subTitle:'Protecting Faith and Community in Christ.',

  description:
  'We are committed to providing a safe, trusted, and secure space for gathering, sharing, and growing together in Christ.',

  badgeTitle:'Your Safety.',

  badgeSubTitle:'Your Priority.',

  badgeStatus:'Protected in Christ.',

  badgeIcon:'bi bi-shield-check'

};

/*==========================================================
SECURITY FEATURE CARDS X91
==========================================================*/

authenticationSecurityCardsX91 = [

  {

    id:1,

    icon:'bi bi-shield-lock',

    iconColor:'#5B8E63',

    title:'Faith-Aligned Security',

    description:
    'Built on values of trust, respect, and Christ-like love.',

    background:'#F8FCF9'

  },

  {

    id:2,

    icon:'bi bi-people',

    iconColor:'#5D6DB3',

    title:'Community Protection',

    description:
    'Tools that help keep our community safe and welcoming.',

    background:'#F8FAFF'

  },

  {

    id:3,

    icon:'bi bi-lock',

    iconColor:'#5D6DB3',

    title:'Privacy by Design',

    description:
    'Your personal information remains protected and confidential.',

    background:'#F8FAFF'

  },

  {

    id:4,

    icon:'bi bi-check-circle',

    iconColor:'#4B8E74',

    title:'Transparency First',

    description:
    'Clear policies, honest practices, and open communication.',

    background:'#F8FCF9'

  }

];

/*==========================================================
BANNER ACTION
==========================================================*/

authenticationBannerActionX91(){

  console.log('Authentication Banner');

}

/*==========================================================
CARD CLICK
==========================================================*/

authenticationSecurityCardClickX91(card:any){

  console.log(card);

}









/*==========================================================
AUTHENTICATION SECURITY FEATURE CARDS X92
==========================================================*/

authenticationSecurityFeatureCardsX92 = [

  {
    id:1,

    icon:'bi bi-shield-check',

    iconColor:'#2F6A42',

    buttonColor:'#2F6A42',

    title:'Account Verification',

    description:'Build trust through verified identities and reliable members.',

    buttonText:'Verify My Account',

    items:[

      {
        icon:'bi bi-check-circle-fill',
        title:'Email Verification',
        description:'Confirm your email address'
      },

      {
        icon:'bi bi-check-circle-fill',
        title:'Phone Verification',
        description:'Verify your phone number'
      },

      {
        icon:'bi bi-check-circle-fill',
        title:'Trusted Member Badge',
        description:'Earn a badge for active, Christ-centered participation'
      },

      {
        icon:'bi bi-check-circle-fill',
        title:'Identity Confirmation (Optional)',
        description:'For B&B hosts and leaders'
      }

    ]

  },

  {

    id:2,

    icon:'bi bi-people-fill',

    iconColor:'#1F4FA5',

    buttonColor:'#1F4FA5',

    title:'Youth Safety & Privacy',

    description:'Protect our youth and promote healthy, positive interactions.',

    buttonText:'Manage Youth Settings',

    items:[

      {
        icon:'bi bi-check-circle-fill',
        title:'Parental Controls',
        description:'Manage youth account settings'
      },

      {
        icon:'bi bi-check-circle-fill',
        title:'Safe Interaction',
        description:'Filter messages and connections'
      },

      {
        icon:'bi bi-check-circle-fill',
        title:'Content Guidelines',
        description:'Faith-aligned content standards'
      },

      {
        icon:'bi bi-check-circle-fill',
        title:'Report & Support',
        description:'Report concerns confidentially'
      }

    ]

  },

  {

    id:3,

    icon:'bi bi-patch-check-fill',

    iconColor:'#BE7A05',

    buttonColor:'#BE7A05',

    title:'Community Trust Indicators',

    description:'Know who you are connecting with and the groups you join.',

    buttonText:'Learn About Trust',

    items:[

      {
        icon:'bi bi-check-circle-fill',
        title:'Verified Members',
        description:'Look for the trusted badge'
      },

      {
        icon:'bi bi-check-circle-fill',
        title:'Verified B&B Hosts',
        description:'Background-checked hosts'
      },

      {
        icon:'bi bi-check-circle-fill',
        title:'Group Integrity',
        description:'Trusted by community leaders'
      },

      {
        icon:'bi bi-check-circle-fill',
        title:'Activity & Reputation',
        description:'Positive participation over time'
      }

    ]

  },

  {

    id:4,

    icon:'bi bi-lock-fill',

    iconColor:'#2C5B35',

    buttonColor:'#2C5B35',

    title:'Secure Sign-In & Recovery',

    description:'Keep your account secure and accessible at all times.',

    buttonText:'Security Settings',

    items:[

      {
        icon:'bi bi-check-circle-fill',
        title:'Two-Factor Authentication',
        description:'Add an extra layer of security'
      },

      {
        icon:'bi bi-check-circle-fill',
        title:'Strong Passwords',
        description:'Create and update securely'
      },

      {
        icon:'bi bi-check-circle-fill',
        title:'Account Recovery',
        description:'Recover access if needed'
      },

      {
        icon:'bi bi-check-circle-fill',
        title:'Device Management',
        description:'Review and manage devices'
      }

    ]

  }

];

/*==========================================================
CARD CLICK X92
==========================================================*/

authenticationSecurityFeatureCardClickX92(card:any){

  console.log(card);

}

/*==========================================================
BUTTON CLICK X92
==========================================================*/

authenticationSecurityFeatureButtonClickX92(card:any){

  console.log(card.title);

}




}
