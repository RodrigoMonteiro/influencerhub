import { UserCrudService } from './../../services/user/user-crud/user-crud.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category, Platform, User } from '../../model/user';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() user: User = {
    id: 0,
    name: '',
    email: '',
    subscribers: 0,
    category: Category.Review,
    platform: Platform.Youtube,
  };
  @Input() isViewOnly: boolean = false;
  @Output() saveChanges = new EventEmitter<User>();
  @Output() closeModal = new EventEmitter();

  categories: string[] = [];
  platforms: string[] = [];

  constructor(private userCrudService: UserCrudService) {}

  ngOnInit(): void {
    this.categories = Object.values(Category);
    this.platforms = Object.values(Platform);
  }

  handleCloseModal() {
    this.closeModal.emit();
  }

   handleCleanFields(){
    this.user.email =""
    this.user.name =""
    this.user.subscribers = 0
   }

  handleSaveChangesOnModal() {

    if (this.user.id !== 0) {
      this.userCrudService.handleUpdateUser(this.user).subscribe(() => {
        this.saveChanges.emit(this.user);
      });

    } else {
      this.userCrudService.handleCreateUser(this.user).subscribe(() => {
        this.saveChanges.emit(this.user);// here does not work...

      });
      this.saveChanges.emit(this.user); // whats the difference??
    }
    this.handleCloseModal();
  }
}
