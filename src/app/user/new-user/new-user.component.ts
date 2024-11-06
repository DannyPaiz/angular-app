import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { DUMMY_AVATARS } from '../../dummy-avatars';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {

  @Output() close = new EventEmitter<void>();
  private userService = inject(UserService);
  // add dummy avatar paths in select options for input
  avatars = DUMMY_AVATARS;
  
  enteredName = '';
  enteredImgPath = '';

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    console.log(`Clicked Add User ${this.enteredName}`)
    console.log(`Clicked Add User ${this.enteredImgPath}`)
    const tempId = this.userService.getNewUserId();
    console.log(`Clicked Add User ${tempId}`)
    this.userService.addUser({
      id: tempId,
      name: this.enteredName,
      avatar: this.enteredImgPath
    })
    this.close.emit();
  }



}
