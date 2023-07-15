import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserStatusService {

  hasUserAccount: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );
  isUserLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  getHasUserAccount(): boolean {
    return this.hasUserAccount.value;
  }

  getIsUserLogged(): boolean {
    return this.isUserLogged.value;
  }

  setUserAccount() {
    this.hasUserAccount.next(true);
  }

  setRemoveUserAccount() {
    this.hasUserAccount.next(false);
  }
  setIsUserLogged() {
    this.isUserLogged.next(true);
  }
  setRemoveIsUserLogged() {
    this.isUserLogged.next(false);
  }
}
