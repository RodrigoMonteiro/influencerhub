import { Injectable } from '@angular/core';
import { UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStatusService } from '../shared/services/user/user-status/user-status.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private userStatusService: UserStatusService,
    private router: Router
  ) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.userStatusService.getIsUserLogged()) {
      console.log('Allowed to acess home-page:', this.userStatusService.getIsUserLogged());
      return true;
    } else {
      console.log(
        'Allowed to acess home-page:',
        this.userStatusService.getIsUserLogged()
      );
      return this.router.parseUrl('');
    }
  }
}
