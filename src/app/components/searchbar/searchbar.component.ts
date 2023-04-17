import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { WatchItem } from 'src/app/classes/watch-item';
import { MovieapiService } from 'src/app/services/movieapi.service';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  searchResult: any[] = [];
  searchForm = new FormGroup({
    movieName: new FormControl(null),
  });

  constructor(
    private MovieServiceApi: MovieapiService,
    private router: Router
  ) {}

  /**
   * search the moviedb for movies
   */
  search() {
    this.searchResult = [];
    this.MovieServiceApi.getSearchMovie(this.searchForm.value).subscribe(
      (result) => {
        if (result.results) {
          let arr: WatchItem[] = [];
          this.searchResult = result.results;
          this.searchResult.forEach((element) => {
            arr.push(new WatchItem(element.title, element.id, element));
          });

          this.router.navigateByUrl('/search', { state: [arr] });
        }
      }
    );
  }
}
