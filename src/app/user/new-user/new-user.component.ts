import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';

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
  
  enteredName = '';
  enteredImgPath = '';

  private nextUserId = 7;

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.userService.addUser({
      id: `u${this.nextUserId}`,
      name: this.enteredName,
      avatar: this.enteredImgPath
    })
    this.nextUserId++;
    console.log(`next user expected to be 7 and nextUserId(8): u${this.nextUserId} `)
  }



}
