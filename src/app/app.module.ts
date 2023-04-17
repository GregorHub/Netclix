import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainframeComponent } from './components/mainframe/mainframe.component';
import { HeaderComponent } from './components/header/header.component';
import { StartHeaderComponent } from './components/start-header/start-header.component';
import { MovieBannerComponent } from './components/movie-banner/movie-banner.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ShowframeComponent } from './components/showframe/showframe.component';
import { MovieapiService } from './services/movieapi.service';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { WatchframeComponent } from './components/watchframe/watchframe.component';
import { SelectProfileComponent } from './components/select-profile/select-profile.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ReactiveFormsModule } from '@angular/forms';

import { SearchframeComponent } from './components/searchframe/searchframe.component';
@NgModule({
  declarations: [
    AppComponent,
    MainframeComponent,
    HeaderComponent,
    StartHeaderComponent,
    MovieBannerComponent,
    MovieCardComponent,
    ShowframeComponent,
    WatchframeComponent,
    SelectProfileComponent,
    SearchbarComponent,

    SearchframeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    YouTubePlayerModule,
    ReactiveFormsModule,
  ],
  providers: [MovieapiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
