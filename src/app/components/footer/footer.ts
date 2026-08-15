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

    subtitle:'Articles of Faith 1:13'

  };

  /*==========================================================
  SCRIPTURE LINKS X88441-Y55119
  ==========================================================*/

  scriptureLinksX88441Y55119 = [

    {
      id:1,
      title:'1 Timothy 6:15'
    },

    {
      id:2,
      title:'Revelation 17:14'
    },

    {
      id:3,
      title:'Revelation 19:16'
    },

    {
      id:4,
      title:'Revelation 22:20'
    },

    {
      id:5,
      title:'Isaiah 64:1'
    },

    {
      id:6,
      title:'D&C 133:40'
    },

    {
      id:7,
      title:'Matthew 6:10'
    }

  ];

  /*==========================================================
  SCRIPTURE CLICK X88441-Y55119
  ==========================================================*/

  scriptureClickX88441Y55119(item:any){

    console.log(item);

  }

}