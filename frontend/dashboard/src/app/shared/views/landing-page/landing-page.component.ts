import { LoginService } from './../../services/login/login.service';
import { Component, OnDestroy } from '@angular/core';
import { UserStatusService } from '../../services/user/user-status/user-status.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnDestroy {
  hasUserAccount: boolean = true;
  isUserLogged: boolean = false;

  userEmail: string = '';
  userPassword: string = '';
  newUserEmail: string = '';
  newUserPassword: string = '';
  newUserRepeatPassword: string = '';

  private isUserLoggedSubscription: Subscription;
  private hasUserAccountSubscription: Subscription;

  constructor(
    private userStatusService: UserStatusService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.isUserLoggedSubscription =
      this.userStatusService.isUserLogged.subscribe(
        (isLogged) => (this.isUserLogged = isLogged)
      );
    this.hasUserAccountSubscription =
      this.userStatusService.hasUserAccount.subscribe(
        (hasAccount) => (this.hasUserAccount = hasAccount)
      );
  }

  handleCreateNewAccount() {
    this.userStatusService.setRemoveUserAccount();
  }

  createAccount() {
    if (this.newUserPassword === this.newUserRepeatPassword) {
      this.loginService.handleCreateNewAccount(
        this.newUserEmail,
        this.newUserPassword
      );
      this.userStatusService.setUserAccount();
    }
    this.newUserEmail = '';
    this.newUserPassword = '';
    this.newUserRepeatPassword = '';
  }

  handleLogin() {
    this.loginService.handleAuthenticateUser(this.userEmail).subscribe(
      (account) => {
        if (account[0].password === this.userPassword) {
          this.userStatusService.setIsUserLogged();
          this.router.navigate(['/home']);
          this.userEmail = '';
          this.userPassword = '';
        } else {
          console.log('Email or password incorrect.');
        }
      },
      (error) => {
        console.error('Failed to authenticate user', error);
      }
    );
  }

  handleChangePassword() {
    alert('Soon we will bring this functionality 😆');
  }

  handleLoginPage() {
    this.userStatusService.setUserAccount();
  }

  ngOnDestroy() {
    this.isUserLoggedSubscription.unsubscribe();
    this.hasUserAccountSubscription.unsubscribe();
  }
}
