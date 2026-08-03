import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { LovingOurNeighbor } from './pages/loving-our-neighbor/loving-our-neighbor';
import { SharingOurFaith } from './pages/sharing-our-faith/sharing-our-faith';

export const routes: Routes = [
  { path: '', component: Home },
    { path: 'loving-our-neighbor', component: LovingOurNeighbor },
    { path: 'sharing-our-faith', component: SharingOurFaith },


];