import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { MovieapiService } from 'src/app/services/movieapi.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'select-profile',
  templateUrl: './select-profile.component.html',
  styleUrls: ['./select-profile.component.css'],
})
export class SelectProfileComponent {
  constructor(
    private us: UserService,
    MovieapiService: MovieapiService,
    private router: Router
  ) {
    let user = new User('test', MovieapiService);
    this.us.setUser(user);
  }

  /**
   * navigate to home
   */
  navigateHome() {
    this.router.navigateByUrl('home');
  }
}
