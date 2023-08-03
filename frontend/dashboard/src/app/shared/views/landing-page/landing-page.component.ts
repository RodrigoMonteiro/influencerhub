import { LoginService } from './../../services/login/login.service';
import { Component, OnDestroy } from '@angular/core';
import { UserStatusService } from '../../services/user/user-status/user-status.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Account } from '../../model/account';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnDestroy {
  snackbarMessage: string = '';
  snackbarIsVisible: boolean = false;

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
    this.handleResetAllFields()
    this.handleCloseSnackbar()
  }

  createAccount() {
    if (
      this.newUserEmail.length === 0 ||
      this.newUserPassword.length === 0 ||
      this.newUserPassword !== this.newUserRepeatPassword
    ) {
      this.handleOpenSnackbar();
      return;
    }

    this.loginService.handleCreateNewAccount(
      this.newUserEmail,
      this.newUserPassword
    );
    this.userStatusService.setUserAccount();
    this.handleResetAllFields();
  }

  handleLogin() {
    this.loginService.handleAuthenticateUser(this.userEmail).subscribe({
      next: (account: Account[]) => {
        if (
          account.length > 0 &&
          account[0].password === this.userPassword
        ) {
          this.userStatusService.setIsUserLogged();
          this.router.navigate(['/home']);
          this.handleResetAllFields();
        } else {
          this.handleOpenSnackbar();
        }
      },
      error: (error: any) => {
        console.error('Failed to authenticate user', error);
      },
    });
  }

  handleChangePassword() {
    alert('Soon we will bring this functionality 😆');
  }

  handleLoginPage() {
    this.userStatusService.setUserAccount();
    this.handleResetAllFields()
    this.handleCloseSnackbar()
  }

  handleCloseSnackbar() {
    this.snackbarIsVisible = false;
  }
  handleOpenSnackbar() {
    this.snackbarIsVisible = true;
  }

  handleResetAllFields() {
    this.userEmail = '';
    this.userPassword = '';
    this.newUserEmail = '';
    this.newUserPassword = '';
    this.newUserRepeatPassword = '';
  }

  ngOnDestroy() {
    this.isUserLoggedSubscription.unsubscribe();
    this.hasUserAccountSubscription.unsubscribe();
  }
}
