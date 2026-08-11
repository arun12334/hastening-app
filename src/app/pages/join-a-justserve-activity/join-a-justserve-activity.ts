import { Component } from '@angular/core';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-join-a-justserve-activity',
  imports: [Header],
  templateUrl: './join-a-justserve-activity.html',
  styleUrl: './join-a-justserve-activity.scss',
})
export class JoinAJustserveActivity {

  /*==========================================================
  BANNER IMAGE
  ==========================================================*/

  bannerImage =
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2200&q=80';

  /*==========================================================
  BANNER CONTENT
  ==========================================================*/

  bannerData={

    icon:'bi bi-heart-pulse-fill',

    title:'Just Serve Projects',

    subTitle:'Small acts of service. Eternal impact.',

    verse:
    '"As ye have done it unto one of the least of these my brethren, ye have done it unto me."',

    scripture:'Matthew 25:40'

  };

}