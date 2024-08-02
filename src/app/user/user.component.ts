//---------------------all the Imports----------------------------
import { Component,  EventEmitter,  Input, output, Output } from '@angular/core';
import{User} from './user.model';
// Import the usermodel typedefination from another file


// deining the user object type using the type defination feature
// type User = {
//   id: string;
//   name: string;
//   avater: string;
// }

// we also can define the user using the interface in typescript
// interface User {
//   id: string;
//   name: string;
//   avater: string;
// }

// we have made another file for the above definations



// ---------------------Component Section -----------------------------
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // We can define the type and the user properties
  @Input({required: true}) user!:User;
  // Instead of the below data we can take the user object directly
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avater!:string;
  // @Input({required:true}) name!:string;
  // select = output<string>();

  @Output() select = new EventEmitter<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();


  // imagePath = computed(()=>{
  //   return 'assets/users/' + this.avatar();
  // })
  get imagePath(){
    return 'assets/users/' + this.user.avater;
  }

  onSelectUser () {
    this.select.emit(this.user.id);
  }

}



//to generate the random number
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
// ----------------------old code in the user component class in which we can change the user each click------------
  // it is aviliable in the template, If we make this private then it will bw aviliable to the class only
  // signal can detect the changes made by the function and also changes in the UI
  // slectetdUsers = signal(DUMMY_USERS[randomIndex]) // set a initial value

  //We are making a getter for the computaion in the html avater file
  //this keyword as we are using this inside the class

  // get imagePath() {
  //   return 'assets/users/' + this.slectetdUsers.avatar;
  // }

  // now with the signal we can directly use the computed path
  // imagePath = computed(()=> 'assets/users/' + this.slectetdUsers().avatar)

  //for the event listner button method
  // onSelectUser() {
  //   ------------------we don't need the random user to change one click
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.slectetdUsers.set(DUMMY_USERS[randomIndex]); //a new value in the signal is passed
  // }

