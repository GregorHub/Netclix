import { Component } from '@angular/core';
import { MovieapiService } from 'src/app/services/movieapi.service';
import { Location } from '@angular/common';
import { WatchItem } from 'src/app/classes/watch-item';
import { Router } from '@angular/router';

@Component({
  selector: 'searchframe',
  templateUrl: './searchframe.component.html',
  styleUrls: ['./searchframe.component.css'],
})
export class SearchframeComponent {
  searchResult: any = [];
  searchWord: any = [];
  constructor(
    private location: Location,

    private router: Router
  ) {
    router.events.subscribe((e) => {
      let res = this.location.getState();
      this.searchResult = res['0'];
      this.searchWord = res['1'].movieName;
    });
  }
  ngOnInit() {
    let res = this.location.getState();
    this.searchResult = res['0'];
  }
}
