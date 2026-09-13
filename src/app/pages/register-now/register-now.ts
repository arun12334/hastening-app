import { Component, inject } from '@angular/core';
import { Header } from '../../components/header/header';
import { FormsModule } from '@angular/forms';
import { Footer } from '../../components/footer/footer';
import { Router } from '@angular/router';

interface LocationGroup {
  value: string;
  label: string;
}
@Component({
  selector: 'app-register-now',
  imports: [Header, Footer, FormsModule],
  templateUrl: './register-now.html',
  styleUrl: './register-now.scss',
})
export class RegisterNow {

  private readonly router = inject(Router);
  formSubmitted = false;
  validationMessage = '';
  registrationSucceeded = false;
  registrationToastMessage = '';
  registrationToastVisible = false;
  private registrationToastTimer?: ReturnType<typeof setTimeout>;

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
      'assets/worshiping/worshiping-christ-through-music-banner1.png'

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

    userName: '',

    firstName: '',

    lastName: '',

    streetAddress: '',

    city: '',

    state: '',

    country: '',

    zipCode: '',

    mobileNumber: '',

    emailAddress: '',

    password: '',

    confirmPassword: ''

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

    image:'assets/worshiping/login33.png'

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

    const selectedCount = this.registrationOptionsX977563Y966776
      .filter((registrationOption) => registrationOption.selected).length;

    if (selectedCount > 2) {
      option.selected = false;
      this.validationMessage = 'Only two registration options are allowed.';
    } else {
      this.validationMessage = '';
    }

  }

  preventThirdRegistrationOptionX977563Y966776(
    option: { selected: boolean },
    event: MouseEvent
  ): void {
    const selectedCount = this.registrationOptionsX977563Y966776
      .filter((registrationOption) => registrationOption.selected).length;

    if (!option.selected && selectedCount >= 2) {
      event.preventDefault();
      this.showRegistrationToastX977563Y966776(
        'Only two registration options are allowed.'
      );
    }
  }

  private showRegistrationToastX977563Y966776(message: string): void {
    if (this.registrationToastTimer) {
      clearTimeout(this.registrationToastTimer);
    }

    this.registrationToastMessage = message;
    this.registrationToastVisible = true;
    this.registrationToastTimer = setTimeout(() => {
      this.registrationToastVisible = false;
    }, 3000);
  }

  /*==========================================================
  TERMS SELECT
  ==========================================================*/

  termsSelectionX977563Y966776(term:any){

    term.checked = Boolean(term.checked);

  }

  /*==========================================================
  REGISTER
  ==========================================================*/

  registerNowX977563Y966776(){

    this.formSubmitted = true;
    const selectedOptions = this.registrationOptionsX977563Y966776
      .filter((option) => option.selected);
    const hasMissingPersonalInformation = Object.values(this.personalInformationX977563Y966776)
      .some((value) => !String(value).trim());
    const hasUnacceptedTerms = this.termsConditionsX977563Y966776
      .some((term) => !term.checked);

    if (this.personalInformationX977563Y966776.password !==
      this.personalInformationX977563Y966776.confirmPassword) {
      this.validationMessage = 'Password and confirm password must match.';
      return;
    }

    if (hasMissingPersonalInformation) {
      this.validationMessage = 'Please complete all personal information fields.';
      return;
    }

    if (selectedOptions.length !== 2) {
      this.validationMessage = 'Please select exactly two registration options.';
      return;
    }

    if (!this.selectedPrimaryLocation) {
      this.validationMessage = 'Please select a primary location group.';
      return;
    }

    if (hasUnacceptedTerms) {
      this.validationMessage = 'Please accept all Terms and Conditions.';
      return;
    }

    const registrationPayload = {
      personalInformation: { ...this.personalInformationX977563Y966776 },
      registrationOptions: selectedOptions.map((option) => ({
        id: option.id,
        title: option.title,
        deliveryMethod: 'deliveryMethod' in option ? option.deliveryMethod : null
      })),
      children: this.childrenX977563Y966776.map((child) => ({ ...child })),
      termsAndConditions: this.termsConditionsX977563Y966776
        .map((term) => ({ id: term.id, text: term.text, checked: term.checked })),
      locationGroups: {
        primary: this.selectedPrimaryLocation,
        secondary: this.selectedSecondaryLocation || null
      }
    };

    console.log('Registration payload:', registrationPayload);
    this.validationMessage = '';
    this.registrationSucceeded = true;
    this.showRegistrationToastX977563Y966776('Registration successful.');
    this.router.navigate(['/home']);
  }


   primaryLocationGroups: LocationGroup[] = [
    {
      value: 'north-america',
      label: 'North America'
    },
    {
      value: 'south-america',
      label: 'South America'
    },
    {
      value: 'europe',
      label: 'Europe'
    },
    {
      value: 'asia',
      label: 'Asia'
    },
    {
      value: 'africa',
      label: 'Africa'
    },
    {
      value: 'australia',
      label: 'Australia'
    }
  ];

  secondaryLocationGroups: LocationGroup[] = [
    {
      value: 'north-america',
      label: 'North America'
    },
    {
      value: 'south-america',
      label: 'South America'
    },
    {
      value: 'europe',
      label: 'Europe'
    },
    {
      value: 'asia',
      label: 'Asia'
    },
    {
      value: 'africa',
      label: 'Africa'
    },
    {
      value: 'australia',
      label: 'Australia'
    }
  ];

  selectedPrimaryLocation = '';

  selectedSecondaryLocation = '';

  onPrimaryLocationChange(): void {
    console.log(
      'Primary Location Group:',
      this.selectedPrimaryLocation
    );
  }

  onSecondaryLocationChange(): void {
    console.log(
      'Secondary Location Group:',
      this.selectedSecondaryLocation
    );
  }

  isPersonalFieldInvalid(field: keyof typeof this.personalInformationX977563Y966776): boolean {
    return this.formSubmitted && !String(this.personalInformationX977563Y966776[field]).trim();
  }

  isChildFieldInvalid(child: { name: string; age: string }, field: 'name' | 'age'): boolean {
    return this.formSubmitted && !String(child[field]).trim();
  }

  areOptionsInvalid(): boolean {
    return this.formSubmitted &&
      this.registrationOptionsX977563Y966776.filter((option) => option.selected).length !== 2;
  }

  areTermsInvalid(): boolean {
    return this.formSubmitted && this.termsConditionsX977563Y966776.some((term) => !term.checked);
  }

}
