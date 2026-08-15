import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-does-unity-baptism',
  standalone: true,
  imports: [CommonModule, Header],
  templateUrl: './does-unity-baptism.html',
  styleUrl: './does-unity-baptism.scss',
})
export class DoesUnityBaptism {
   bannerImage =
'assets/does-unity/does-unity-baptism-banner.png';
 

  //====================================================
  // HERO BANNER
  //====================================================

  hero = {

    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2200&q=80',

    title: 'Does Unity Require Baptism?',

    subtitle:
      'Seeking unity in Christ through faith, love, and divine order.',

    verse:
      '"Endeavouring to keep the unity of the Spirit in the bond of peace."',

    reference: 'Ephesians 4:3'

  };


  bannerData = {

  icon: 'bi bi-person',

  title: 'Does Unity Require Baptism?',

  subtitle: 'Seeking unity in Christ through faith, love, and divine order.',

  description:
    '"Endeavouring to keep the unity of the Spirit in the bond of peace."',

  scriptureReference: 'Ephesians 4:3'

};



  //====================================================
  // MAIN CONTENT
  //====================================================

  mainContent = {

    title: 'Does Unity Require Baptism?',

    paragraphs: [

      'Ephesians 4 speaks of unity where we are bearing one another in love, with one Lord, one faith and one baptism.',

      'In Acts 19 Paul met believers who had received John’s baptism and later baptized them in the name of Jesus Christ.',

      'When the Holy Spirit was poured out after baptism they received spiritual gifts and grew together in faith.',

      'Building Zion begins with unity of purpose, love, service and obedience to Jesus Christ.',

      'True unity comes through following Christ, growing in faith, and serving one another.'

    ],

    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2200&q=80'

  };



  //====================================================
  // FEATURE CARDS
  //====================================================

  featureCards = [

    {

      icon: 'bi-people-fill',

      title: 'Shared Journey Toward Zion',

      description:
        'Unity is built through faith, repentance, love, patience and service.',

      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2200&q=80',

      button: 'Learn More',

      color: 'warning'

    },

    {

      icon: 'bi-book-half',

      title: 'Grow in Faith & Understanding',

      description:
        'Study the scriptures, pray and seek personal revelation.',

      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=2200&q=80',

      button: 'Explore Resources',

      color: 'primary'

    },

    {

      icon: 'bi-people',

      title: 'Connect in Fellowship',

      description:
        'Join others who are seeking Christ and build Zion together.',

      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2200&q=80',

      button: 'Find a Group',

      color: 'success'

    }

  ];



  //====================================================
  // FOOTER VERSE
  //====================================================

  footerVerse = {

    verse:
      '"Behold, how good and how pleasant it is for brethren to dwell together in unity!"',

    reference: 'Psalm 133:1'

  };



  //====================================================
  // FOOTER REFERENCES
  //====================================================

  scriptures = [

    'John 3:3–5',

    'Ephesians 4:3–5',

    '2 Nephi 31:10–13',

    'Acts 19:3–5',

    'Moroni 10:3–5',

    'Ecclesiastes 3:1–7'

  ];

}