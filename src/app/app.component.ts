import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './shared/card/card.component';
import { DUMMY_USERS} from './dummy-users';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    HeaderComponent, 
    CardComponent, 
    UserComponent,
    TasksComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
  users = DUMMY_USERS; // DATA
  selectedUserId?: string // store selected User > view their task / form

  get selectedUser() {
    return this.users.find(
      (user) => user.id === this.selectedUserId
    );
  }

  // id = $event.. within app.component passes val user.component 
  // passes value TO user.component > card.component
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

}
