import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { MyPlaylistScreenComponent } from './my-playlist-screen/my-playlist-screen.component';
import { VideoComponent } from './video/video.component';
import { ListingComponent } from './listing/listing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeScreenComponent,
    MyPlaylistScreenComponent,
    VideoComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
