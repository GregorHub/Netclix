import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { User } from 'src/app/classes/user';
import { WatchItem } from 'src/app/classes/watch-item';
import { MovieapiService } from 'src/app/services/movieapi.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mainframe',
  templateUrl: './mainframe.component.html',
  styleUrls: ['./mainframe.component.css'],
})
export class MainframeComponent {
  user: User;
  startHeaderItem: WatchItem;
  trending: WatchItem[] = [];
  action: WatchItem[] = [];
  comedy: WatchItem[] = [];
  tvshows: WatchItem[] = [];
  constructor(userService: UserService, movieservice: MovieapiService) {
    this.user = userService.getUser();

    movieservice.bannerApiData().subscribe((e) => {
      let res = e.results[0];
      this.startHeaderItem = new WatchItem(res.title, res.id, res);
      let arr: any[] = e.results;
      arr.shift();
      arr.forEach((element) => {
        this.trending.push(new WatchItem(element.title, element.id, element));
      });
    });

    movieservice.fetchActionMovies().subscribe((e) => {
      let arr: any[] = e.results;
      arr.shift();
      arr.forEach((element) => {
        this.action.push(new WatchItem(element.title, element.id, element));
      });
    });

    movieservice.fetchComedyMovies().subscribe((e) => {
      let arr: any[] = e.results;
      arr.shift();
      arr.forEach((element) => {
        this.comedy.push(new WatchItem(element.title, element.id, element));
      });
    });

    movieservice.fetchTVShows().subscribe((e) => {
      let arr: any[] = e.results;
      arr.shift();
      arr.forEach((element) => {
        if (element.vote_average > 8) {
          this.tvshows.push(new WatchItem(element.title, element.id, element));
        }
      });
    });
  }
}
