import { Component, Input, inject } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { TasksService } from './tasks.service';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name?: string;
  isAddingTask = false;
  hidingTasks = false;

  constructor(private tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
    this.hidingTasks = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
    this.hidingTasks = false;
  }

}
