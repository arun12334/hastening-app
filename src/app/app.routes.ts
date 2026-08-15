import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { LovingOurNeighbor } from './pages/loving-our-neighbor/loving-our-neighbor';
import { SharingOurFaith } from './pages/sharing-our-faith/sharing-our-faith';
import { PrayForSomeone } from './pages/pray-for-someone/pray-for-someone';
import { SistersInZion } from './pages/sisters-in-zion/sisters-in-zion';
import { RegisterNow } from './pages/register-now/register-now';
import { InvitationToUnity } from './pages/invitation-to-unity/invitation-to-unity';
import { DoesUnityBaptism } from './pages/does-unity-baptism/does-unity-baptism';
import { NeighborhoodBbEvents } from './pages/neighborhood-bb-events/neighborhood-bb-events';
import { SharingAStoryOfLove } from './pages/sharing-a-story-of-love/sharing-a-story-of-love';
import { JoinAJustserveActivity } from './pages/join-a-justserve-activity/join-a-justserve-activity';
import { JoiningEmmasReliefSociety } from './pages/joining-emmas-relief-society/joining-emmas-relief-society';
import { AuthenticationAndSecurityManagementSystem } from './pages/authentication-and-security-management-system/authentication-and-security-management-system';
import { WorshipingChristThroughMusic } from './pages/worshiping-christ-through-music/worshiping-christ-through-music';





export const routes: Routes = [
  { path: '', component: Home },
    { path: 'loving-our-neighbor', component: LovingOurNeighbor },
    { path: 'sharing-our-faith', component: SharingOurFaith },
    { path: 'sisters-in-zion', component: SistersInZion },
    { path: 'register-now', component: RegisterNow },
    { path: 'invitation-to-unity', component: InvitationToUnity },
    { path: 'does-unity-baptism', component: DoesUnityBaptism },
    { path: 'neighborhood-bb-events', component: NeighborhoodBbEvents },
    { path: 'sharing-a-story-of-love', component: SharingAStoryOfLove },
    { path: 'join-a-justserve-activity', component: JoinAJustserveActivity },
    { path: 'joining-emmas-relief-society', component: JoiningEmmasReliefSociety },
    { path: 'authentication-and-security-management-system', component: AuthenticationAndSecurityManagementSystem },
    { path: 'worshiping-christ-through-music', component: WorshipingChristThroughMusic },
  {
    path: 'pray-for-someone',
    component: PrayForSomeone
  }
];


 