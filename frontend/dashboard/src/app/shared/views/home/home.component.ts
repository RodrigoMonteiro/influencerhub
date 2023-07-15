import { Component, Input } from '@angular/core';
import { Category, Platform, User } from '../../model/user';
import { UserCreateService } from '../../services/user/user-create/user-create.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  searchField: string = '';
  isModalOpen: boolean = false;
  newUser: User = {
    id: 0,
    name: '',
    email: '',
    subscribers: 10,
    category: Category.Review,
    platform: Platform.Youtube,
  };
  constructor(private userService: UserCreateService) {}

  handleChangeModalClose() {
    this.isModalOpen = false;
  }
  handleChangeModalOpen() {
    this.isModalOpen = true;
  }

 handleSaveChanges(user: User) {
  this.userService.setNewUser(user);
  this.isModalOpen = false;
}
}
