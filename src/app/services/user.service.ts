import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { MovieapiService } from './movieapi.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: User = undefined;
  constructor(private ms: MovieapiService) {
    this.user = new User('test', ms);
  }

  public setUser(user: User) {
    this.user = user;
  }
  public getUser() {
    return this.user;
  }
}
