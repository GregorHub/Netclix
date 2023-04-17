import { Component } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'showframe',
  templateUrl: './showframe.component.html',
  styleUrls: ['./showframe.component.css'],
})
export class ShowframeComponent {
  user: User;
  constructor(UserService: UserService) {
    this.user = UserService.getUser();
  }
}
