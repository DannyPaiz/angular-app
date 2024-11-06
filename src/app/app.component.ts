import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './shared/card/card.component';
import { DUMMY_USERS} from './dummy-users';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    HeaderComponent, 
    CardComponent, 
    UserComponent,
    TasksComponent,
    NewUserComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
  users = DUMMY_USERS; // DATA
  selectedUserId?: string // store selected User > view their task / form

  // default view, ALL USERS to click and view their tasks
  currentView = 1; // view 2: add a user form

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

  updateView(viewNumber: number) {
    this.currentView = viewNumber;
  }


  // NEED TO ADD USER SUCCESSSFULLY AND RENDER
  // USERS can be updated or re-run
  // might need to add another component just to re-render users
  // instead of within app.component
  // private userService = inject(UserService);

  // next to re-render the application with local data...
  // ngAfterContentChecked(): void {
  //   //Called after every check of the component's view. Applies to components only.
  //   //Add 'implements AfterViewChecked' to the class.
  //   this.users = DUMMY_USERS;
  //   console.log(this.users);
  // }

}
