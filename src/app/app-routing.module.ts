import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainframeComponent } from './components/mainframe/mainframe.component';

import { ShowframeComponent } from './components/showframe/showframe.component';
import { WatchframeComponent } from './components/watchframe/watchframe.component';
import { SelectProfileComponent } from './components/select-profile/select-profile.component';
import { SearchframeComponent } from './components/searchframe/searchframe.component';

const routes: Routes = [
  { path: 'home', component: MainframeComponent },
  { path: 'myList', component: ShowframeComponent },
  { path: 'watch', component: WatchframeComponent },
  { path: 'search', component: SearchframeComponent },
  { path: '', component: SelectProfileComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
