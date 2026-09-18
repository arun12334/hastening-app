import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

  /*==========================================================
  FOOTER DATA X88441-Y55119
  ==========================================================*/

  footerDataX88441Y55119 = {

    logo:'assets/home/home-temple.png',

    quote:'"We believe in being honest, true, chaste, benevolent, virtuous, and in doing good to all men."',

    subtitle:'Articles of Faith 1:13',

    year: new Date().getFullYear()

  };

  contactDetailsX88441Y55119 = [
    // { label: 'Address', value: '123 Faith Avenue, Hastening City, UT 84001, USA', href: 'https://maps.google.com/?q=123+Faith+Avenue+Hastening+City+UT+84001', icon: 'bi bi-geo-alt-fill' },
    // { label: 'Phone', value: '+01 816-651-0386', href: 'tel:+18166510386', icon: 'bi bi-telephone-fill' },
    { label: 'Email', value: 'info@hastening.org', href: 'mailto:info@hastening.org', icon: 'bi bi-envelope-fill' },
    { label: 'Website', value: 'www.hastening.org', href: 'https://hastening.org', icon: 'bi bi-globe2' }
  ];

  /*==========================================================
  SCRIPTURE LINKS X88441-Y55119
  ==========================================================*/

  scriptureLinksX88441Y55119 = [

    {
      id:1,
      title:'1 Timothy 6:15',
      message:'Which in his times he shall shew, who is the blessed and only Potentate, the King of kings, and Lord of lords;'
    },

    {
      id:2,
      title:'Revelation 17:14',
      message:'These shall make war with the Lamb, and the Lamb shall overcome them: for he is Lord of lords, and King of kings: and they that are with him are called, and chosen, and faithful.'
    },

    {
      id:3,
      title:'Revelation 19:16',
      message:'And he hath on his vesture and on his thigh a name written, KING OF KINGS, AND LORD OF LORDS.'
    },

    {
      id:4,
      title:'Revelation 22:20',
      message:'He which testifieth these things saith, Surely I come quickly. Amen. Even so, come, Lord Jesus.'
    },

    {
      id:5,
      title:'Isaiah 64:1',
      message:'Oh that thou wouldest rend the heavens, that thou wouldest come down, that the mountains might flow down at thy presence,'
    },

    {
      id:6,
      title:'D&C 133:40',
      message:'And it shall be said: Awake, awake, O ye kings of the earth; come ye, O come ye, with your gold and your silver, to the help of my people, to the house of the daughters of Zion.'
    },

    {
      id:7,
      title:'Matthew 6:10',
      message:'Thy kingdom come. Thy will be done in earth, as it is in heaven.'
    }

  ];

  /*==========================================================
  SCRIPTURE CLICK X88441-Y55119
  ==========================================================*/

  selectedScriptureX88441Y55119: { title: string; message: string } | null = null;

  scriptureClickX88441Y55119(item: { title: string; message: string }): void {
    this.selectedScriptureX88441Y55119 = item;
  }

  closeScriptureX88441Y55119(): void {
    this.selectedScriptureX88441Y55119 = null;
  }

}