import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { WatchItem } from 'src/app/classes/watch-item';
import { MovieapiService } from 'src/app/services/movieapi.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() item: WatchItem;
  @Input() enableSub = false;
  changeText: Boolean = false;
  user: User;
  constructor(public router: Router, public userService: UserService) {
    this.user = this.userService.getUser();
  }

  /**navigate to watchframe and set item as url state */
  play() {
    this.router.navigateByUrl('/watch', { state: [this.item] });
  }
  /**adds item to savedList */
  addToUserList() {
    if (!this.isItemInSaved(this.item.id)) {
      this.user.addToList(this.item);
    }
  }

  /**
   * check if the displayed item was already saved
   * @param id id of the item
   * @returns true if saved
   */
  isItemInSaved(id) {
    let idList: any[] = this.user.savedList.map((e) => e.id);
    if (idList.includes(id)) {
      return true;
    } else {
      return false;
    }
  }
}
