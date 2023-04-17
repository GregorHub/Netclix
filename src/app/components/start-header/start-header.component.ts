import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { WatchItem } from 'src/app/classes/watch-item';

@Component({
  selector: 'start-header',
  templateUrl: './start-header.component.html',
  styleUrls: ['./start-header.component.css'],
})
export class StartHeaderComponent implements OnChanges {
  @Input() watchItem: WatchItem;
  backdropurl = '';
  constructor(public router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['watchItem'].currentValue) {
      this.watchItem = this.watchItem;
      this.backdropurl =
        'https://image.tmdb.org/t/p/original/' +
        this.watchItem.fetch.backdrop_path;
    }
  }

  /**
   * navigate to watch url and set this item as state
   */
  play() {
    this.router.navigateByUrl('/watch', { state: [this.watchItem] });
  }
}
