import { UserCrudService } from './../../services/user/user-crud/user-crud.service';
import { SearchService } from './../../services/search/search.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Category, Platform, User } from '../../model/user';
import { UserCreateService } from '../../services/user/user-create/user-create.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  searchField: string = '';

  currentUser: User = {
    id: 0,
    name: '',
    email: '',
    subscribers: 0,
    category: Category.Review,
    platform: Platform.Youtube,
  };

  usersTest: User[] = [];
  firstAttribute: string = 'Name';
  secondAttribute: string = 'Email';
  isModalViewOnly: boolean = false;
  isModalTableOpen: boolean = false;

  private firstAttributeSubscription: Subscription;
  private secondAttributeSubscription: Subscription;

  constructor(
    private searchService: SearchService,
    private userService: UserCreateService,
    private userCrudService: UserCrudService
  ) {
    this.firstAttributeSubscription =
      this.searchService.firstAttributeSelected.subscribe((firstAttribute) => {
        this.firstAttribute = firstAttribute;
      });
    this.secondAttributeSubscription =
      this.searchService.secondAttributeSelected.subscribe(
        (secondAttribute) => {
          this.secondAttribute = secondAttribute;
        }
      );
  }

  ngOnInit(): void {
    this.subscribeToNewUser();
    const users = this.userCrudService.handleGetAllUsers();
    users.subscribe((users) => {
      this.usersTest = users;
    });
  }
  handleCloseModalTable() {
    this.isModalTableOpen = false;
  }
  handleOpenModalTable(user: User) {
    this.isModalViewOnly = false;
    this.isModalTableOpen = true;
    this.currentUser = user;
  }
  handleOpenModalTableReadOnly(user: User) {
    this.isModalTableOpen = true;
    this.currentUser = user;
    this.isModalViewOnly = true;
  }

  handleDeleteUser(userDeleted: User) {
    this.userCrudService.handleDeleteUser(userDeleted.id).subscribe(() => {
      //  this.usersTest = this.usersTest.filter(
      //    (user) => user.id !== userDeleted.id
      //  ); Here does not work. why?
      console.log('User deleted');
    });
    this.usersTest = this.usersTest.filter(
      (user) => user.id !== userDeleted.id
    );  //Here work fine...
  }

  searchAttributeByText() {
    const searchValue = this.searchField.toLowerCase();
    this.usersTest = this.usersTest.filter(
      (user) =>
        user[
          String(this.firstAttribute.toLowerCase() as keyof User)
        ].toLowerCase() === searchValue ||
        user[
          String(this.secondAttribute.toLowerCase() as keyof User)
        ].toLowerCase() === searchValue
    );
  }

  handleSaveChanges(user: User) {
    const index = this.usersTest.findIndex((u) => u.id === user.id);

    if (index === -1) {
      this.subscribeToNewUser();
    } else {
      this.usersTest[index] = { ...user };
      this.usersTest = [...this.usersTest]; // Update the usersTest array
    }
  }

  subscribeToNewUser() {
    this.userService.getNewUser().subscribe((newUser) => {
      if (newUser) {
        this.usersTest.push(newUser);
        this.usersTest = [...this.usersTest];
      }
    });
  }
}
