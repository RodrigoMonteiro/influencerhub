import { BehaviorSubject } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';
import { User } from 'src/app/shared/model/user';

@Injectable({
  providedIn: 'root',
})
export class UserCreateService {
  // newUser: EventEmitter<User> = new EventEmitter<User>();
  private newUserSubject: BehaviorSubject<User | null> =
    new BehaviorSubject<User | null>(null);

  constructor() {}

  // setNewUser(user: User) {
  //   this.newUser.emit(user);
  // }
  setNewUser(user: User) {
    this.newUserSubject.next(user);
  }

  getNewUser() {
    return this.newUserSubject.asObservable();
  }
}
