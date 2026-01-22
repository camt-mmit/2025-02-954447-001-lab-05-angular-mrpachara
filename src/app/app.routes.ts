import { Routes } from '@angular/router';
import { Friend } from './friend/friend';
import { HelloWorld } from './hello-world/hello-world';
import { Profile } from './profile/profile';
import { Status } from './status/status';

export const routes: Routes = [
  { path: '', redirectTo: 'hello-world', pathMatch: 'full' },
  { path: 'hello-world', component: HelloWorld },
  { path: 'profile', component: Profile },
  { path: 'friend', component: Friend },
  { path: 'status', component: Status },
];
