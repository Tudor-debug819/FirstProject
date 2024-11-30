import { Component, signal } from '@angular/core';
import { DUMMY_USERS} from '../dummy-users';

const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUsers = signal(DUMMY_USERS[randomIndex]);

  onSelectUser() {
    const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
    this.selectedUsers.set(DUMMY_USERS[randomIndex]);
  }

}
