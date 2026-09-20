import { ChangeDetectorRef, Component, inject, OnDestroy } from '@angular/core';
import { Header } from '../../components/header/header';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Auth, DetailedRegisterRequest, RegisterResponse } from '../../services/auth';
import { finalize } from 'rxjs/operators';

interface LocationGroup {
  value: string;
  label: string;
}
@Component({
  selector: 'app-register-now',
  imports: [Header, FormsModule],
  templateUrl: './register-now.html',
  styleUrl: './register-now.scss',
})
export class RegisterNow implements OnDestroy {

  private readonly router = inject(Router);
  private readonly auth = inject(Auth);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  formSubmitted = false;
  validationMessage = '';
  registrationSucceeded = false;
  registrationSubmitting = false;
  registrationResultMessage = '';
  registrationResultType: 'success' | 'error' = 'success';
  registrationResultVisible = false;
  registrationToastMessage = '';
  registrationToastVisible = false;
  private registrationToastTimer?: ReturnType<typeof setTimeout>;
  private registrationRedirectTimer?: ReturnType<typeof setTimeout>;

  ngOnDestroy(): void {
    if (this.registrationToastTimer) {
      clearTimeout(this.registrationToastTimer);
    }

    if (this.registrationRedirectTimer) {
      clearTimeout(this.registrationRedirectTimer);
    }
  }

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

    jacksonCountyResident: false,

    emailAddress: '',

    password: '',

    confirmPassword: ''

  };

  mobileCountryCode = '';
  jacksonCountyNoticeVisible = false;

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

      deliveryMethod: 'physical'

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

  jacksonCountySelectionChanged(event: Event): void {
    event.stopPropagation();
    if (!this.jacksonCountyNoticeVisible) {
      this.jacksonCountyNoticeVisible = true;
    }
  }

  deliveryMethodChanged(
    option: { deliveryMethod?: string },
    deliveryMethod: 'physical' | 'email'
  ): void {
    option.deliveryMethod = deliveryMethod;
  }

  closeJacksonCountyNotice(): void {
    this.jacksonCountyNoticeVisible = false;
    this.personalInformationX977563Y966776.jacksonCountyResident = false;
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
    if (this.registrationSubmitting) {
      console.debug('[Register Now] Submission ignored because a request is already in progress.');
      return;
    }

    if (this.registrationRedirectTimer) {
      clearTimeout(this.registrationRedirectTimer);
      this.registrationRedirectTimer = undefined;
    }

    console.info('[Register Now] Submit clicked.');
    this.formSubmitted = true;
    const selectedOptions = this.registrationOptionsX977563Y966776
      .filter((option) => option.selected);
    const hasMissingPersonalInformation = Object.entries(this.personalInformationX977563Y966776)
      .some(([field, value]) => !String(value).trim() ||
        (field === 'country' && value === 'Select Country'));
    const hasUnacceptedTerms = this.termsConditionsX977563Y966776
      .some((term) => !term.checked);

    if (this.personalInformationX977563Y966776.password !==
      this.personalInformationX977563Y966776.confirmPassword) {
      this.validationMessage = 'Password and confirm password must match.';
      console.warn('[Register Now] Validation failed: passwords do not match.');
      return;
    }

    if (hasMissingPersonalInformation) {
      this.validationMessage = 'Please complete all personal information fields.';
      console.warn('[Register Now] Validation failed: required personal information is missing.');
      return;
    }

    if (!this.mobileCountryCode.trim()) {
      this.validationMessage = 'Please enter your country code.';
      return;
    }

    if (this.personalInformationX977563Y966776.jacksonCountyResident) {
      this.jacksonCountyNoticeVisible = true;
      return;
    }

    if (selectedOptions.length !== 2) {
      this.validationMessage = 'Please select exactly two registration options.';
      console.warn('[Register Now] Validation failed: invalid registration option count.', selectedOptions.length);
      return;
    }

    if (!this.selectedPrimaryLocation) {
      this.validationMessage = 'Please select a primary location group.';
      console.warn('[Register Now] Validation failed: primary location is missing.');
      return;
    }

    if (hasUnacceptedTerms) {
      this.validationMessage = 'Please accept all Terms and Conditions.';
      console.warn('[Register Now] Validation failed: terms were not accepted.');
      return;
    }

    const registrationPayload: DetailedRegisterRequest = {
      personalInformation: {
        ...this.personalInformationX977563Y966776,
        mobileNumber: `${this.mobileCountryCode.trim()} ${this.personalInformationX977563Y966776.mobileNumber.trim()}`.trim()
      },
      registrationOptions: selectedOptions.map((option) => ({
        id: option.id,
        title: option.title,
        deliveryMethod: 'deliveryMethod' in option ? option.deliveryMethod ?? null : null
      })),
      children: this.childrenX977563Y966776
        .filter((child) => child.name.trim() && String(child.age).trim())
        .map((child) => ({ name: child.name.trim(), age: Number(child.age) })),
      termsAndConditions: this.termsConditionsX977563Y966776
        .map((term) => ({ id: term.id, text: term.text, checked: term.checked })),
      locationGroups: {
        primary: this.selectedPrimaryLocation,
        secondary: this.selectedSecondaryLocation || null
      }
    };

    this.validationMessage = '';
    this.registrationSubmitting = true;
    this.registrationResultVisible = false;
    this.changeDetectorRef.detectChanges();
    console.info('[Register Now] Sending registration payload:', this.getSafeRegistrationPayload(registrationPayload));

    this.auth.register(registrationPayload).pipe(
      finalize(() => {
        this.registrationSubmitting = false;
        this.changeDetectorRef.detectChanges();
        console.info('[Register Now] Registration request finished.');
      })
    ).subscribe({
      next: (response: RegisterResponse) => {
        console.info('[Register Now] API response received:', response);
        if (!response.success) {
          console.error('[Register Now] API rejected registration:', response.message);
          this.handleRegistrationError(response.message || 'Registration could not be completed.');
          return;
        }

        this.registrationSubmitting = false;
        this.registrationSucceeded = true;
        this.registrationResultType = 'success';
        this.registrationResultMessage =
          `${response.message || 'Registration completed successfully.'} ` +
          'Please log in to continue. Redirecting to the login page in 5 seconds.';
        this.registrationResultVisible = true;
        this.showRegistrationToastX977563Y966776(this.registrationResultMessage);
        this.changeDetectorRef.detectChanges();
        console.info('[Register Now] Success popup shown. Redirecting to /login in 5 seconds.');
        this.registrationRedirectTimer = setTimeout(() => {
          this.registrationResultVisible = false;
          this.router.navigate(['/login']);
        }, 5000);
      },
      error: (error: HttpErrorResponse) => {
        console.error('[Register Now] Registration request failed:', {
          status: error.status,
          statusText: error.statusText,
          error: error.error
        });
        this.handleRegistrationError(this.getRegistrationErrorMessage(error));
      }
    });
  }

  private getSafeRegistrationPayload(payload: DetailedRegisterRequest): Omit<DetailedRegisterRequest, 'personalInformation'> & {
    personalInformation: Omit<DetailedRegisterRequest['personalInformation'], 'password' | 'confirmPassword'>;
  } {
    const { password, confirmPassword, ...safePersonalInformation } = payload.personalInformation;
    return {
      ...payload,
      personalInformation: safePersonalInformation
    };
  }

  closeRegistrationResultX977563Y966776(): void {
    this.registrationResultVisible = false;
    if (this.registrationSucceeded) {
      if (this.registrationRedirectTimer) {
        clearTimeout(this.registrationRedirectTimer);
        this.registrationRedirectTimer = undefined;
      }
      this.router.navigate(['/login']);
    }
  }

  private handleRegistrationError(message: string): void {
    this.registrationSubmitting = false;
    this.registrationSucceeded = false;
    this.registrationResultType = 'error';
    this.registrationResultMessage = message;
    this.registrationResultVisible = true;
    this.validationMessage = message;
    this.showRegistrationToastX977563Y966776(message);
  }

  private getRegistrationErrorMessage(error: HttpErrorResponse): string {
    if (typeof error.error?.message === 'string' && error.error.message.trim()) {
      return error.error.message;
    }

    if (typeof error.error === 'string' && error.error.trim()) {
      return error.error;
    }

    if (error.status === 0) {
      return 'Unable to reach the registration service. Check your connection and try again.';
    }

    return 'Registration failed. Please review your details and try again.';
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
