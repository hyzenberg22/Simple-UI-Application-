//---------------------all the Imports----------------------------
import { Component,  EventEmitter,  Input, Output, } from '@angular/core';





// ---------------------Component Section -----------------------------
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) avater!:string;
  @Input({required:true}) name!:string;
  @Output() select = new EventEmitter();


  // avatar = input.required<string>();
  // name = input.required<string>();


  // imagePath = computed(()=>{
  //   return 'assets/users/' + this.avatar();
  // })
  get imagePath(){
    return 'assets/users/' + this.avater;
  }

  onSelectUser () {
    this.select.emit(this.id);
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

