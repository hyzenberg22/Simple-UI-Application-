import { Component, Input } from '@angular/core';
import { Task } from './task.model';
//Define the task component
// interface Task {
//   id:string;
//   userId:string;
//   title:string;
//   summery:string;
//   dueDate: string
// }

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // now we have to export the task component and also have to define the task
  @Input({required:true}) task!:Task
}
