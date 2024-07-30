//This is the mail application component inside this we have to import the other nestet component
import { Component } from '@angular/core';
import { HeaderComponent } from './Header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  // This will be visible to the user tasks
  selectedUserId?: string;

  // we are targeting the id from the user dummy file
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    // console.log('Selected user with ID:- ' + id)
    this.selectedUserId = id;
  }
}
