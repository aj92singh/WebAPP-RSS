import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RSSFeedComponent } from './rssfeed/rssfeed.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddFeedComponent } from './add-feed/add-feed.component';
import { DeleteFeedComponent } from './delete-feed/delete-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';


@NgModule({
  declarations: [
    AppComponent,
    RSSFeedComponent,
    NavbarComponent,
    AddFeedComponent,
    DeleteFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
