import { Component, EventEmitter, inject, Output } from '@angular/core';
import { UserService } from '../user/user.service';
import type { User } from '../user/user.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

// Navigation / Header within app.component
export class HeaderComponent {

  @Output() close = new EventEmitter<void>();

  private userService = inject(UserService);

  // user clicks on Add User button
  // render a VIEW here or in app.component

  onSubmit() {
    console.log(`Clicked to add a User`);
    this.userService.addUser({
      id: this.userService.getNewUserId(),
      name: 'Daniel P',
      avatar: 'user-3.jpg'
    })
    this.close.emit();
  }


} 