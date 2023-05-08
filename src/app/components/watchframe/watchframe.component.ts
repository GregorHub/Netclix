import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { WatchItem } from 'src/app/classes/watch-item';
import { MovieapiService } from 'src/app/services/movieapi.service';
@Component({
  selector: 'watchframe',
  templateUrl: './watchframe.component.html',
  styleUrls: ['./watchframe.component.css'],
})
export class WatchframeComponent implements OnInit {
  watchItem: WatchItem;
  getMovieVideoResult: any = '';

  constructor(
    private location: Location,
    private MovieApiService: MovieapiService
  ) {}
  ngOnInit() {
    this.watchItem = this.location.getState()['0'] as WatchItem;
    this.findTrailer();
  }

  /**
   * search for trailer with item id
   */
  findTrailer() {
    this.MovieApiService.getMovieVideo(this.watchItem.id).subscribe(
      (result) => {
        if (result) {
          result.results.forEach((element: any) => {
            if (element.type == 'Trailer') {
              this.getMovieVideoResult = element.key;
            }
          });
        }
      }
    );
  }
}
