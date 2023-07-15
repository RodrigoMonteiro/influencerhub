import { Router } from '@angular/router';
import { UserStatusService } from './../../services/user/user-status/user-status.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(private userStatusService: UserStatusService, private router: Router){}

  handleLogoutAccount(){
    this.userStatusService.setRemoveIsUserLogged();
    this.userStatusService.setUserAccount()
    this.router.navigate(['']);
  }
}

