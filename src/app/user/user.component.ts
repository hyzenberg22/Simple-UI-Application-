import { Component, computed, signal} from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

//to generate the random number
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // it is aviliable in the template, If we make this private then it will bw aviliable to the class only
  // signal can detect the changes made by the function and also changes in the UI
  slectetdUsers = signal(DUMMY_USERS[randomIndex]) // set a initial value

  //We are making a getter for the computaion in the html avater file
  //this keyword as we are using this inside the class

  // get imagePath() {
  //   return 'assets/users/' + this.slectetdUsers.avatar;
  // }

  // now with the signal we can directly use the computed path
  imagePath = computed(()=> 'assets/users/' + this.slectetdUsers().avatar)

  //for the event listner button method
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.slectetdUsers.set(DUMMY_USERS[randomIndex]); //a new value in the signal is passed
  }
}
