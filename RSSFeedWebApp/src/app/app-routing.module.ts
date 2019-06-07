import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RSSFeedComponent } from './rssfeed/rssfeed.component';
import { AddFeedComponent } from './add-feed/add-feed.component';
import { DeleteFeedComponent } from './delete-feed/delete-feed.component';

const routes: Routes = [
  { path: '', redirectTo: '/RSSFeed', pathMatch: 'full' },
  {path:'RSSFeed', component: RSSFeedComponent},
  {path:'Add',component:AddFeedComponent},
  {path:'Delete',component:DeleteFeedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
