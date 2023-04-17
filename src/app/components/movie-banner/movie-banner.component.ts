import { Component, Input, OnChanges } from '@angular/core';
import { WatchItem } from 'src/app/classes/watch-item';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'movie-banner',
  templateUrl: './movie-banner.component.html',
  styleUrls: ['./movie-banner.component.css'],
})
export class MovieBannerComponent {
  @Input() title: string = '';
  @Input() itemList: WatchItem[];

  constructor() {}

  /**
   * navigate card carousell to rigth
   */
  shiftList() {
    this.itemList.push(this.itemList.shift());
  }
  /**
   * navigate card carousell to left
   */
  reShiftList() {
    let elem = this.itemList.pop();
    this.itemList = [elem].concat(this.itemList);
  }
}
