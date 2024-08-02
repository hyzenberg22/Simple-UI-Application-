import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  //We assign the each tasks to the each user so taking the input
  @Input({required : true}) userId!: string ;


  // @Input() name: string | undefined;
  @Input({required : true}) name!: string ;

  //Now we are making an array to reflect it to the user
  tasks = [
    {
      id : 't1',
      userId: 'u1',
      title: 'Master Angular',
      summery : 'Learn the basic tasks and the advance features in the anguar',
      dueDate: '2025-12-23'
    },
    {
      id : 't2',
      userId: 'u2',
      title: 'Built the first prototype',
      summery : 'Implement the basic functionality ',
      dueDate: '2025-12-28'
    },
    {
      id : 't3',
      userId: 'u3',
      title: 'Push the code to the git',
      summery : 'Push the code to the git hub',
      dueDate: '2025-12-31'
    }
  ];


  //Make a getter method to make the tasks user specific
  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.userId);
  }

}
