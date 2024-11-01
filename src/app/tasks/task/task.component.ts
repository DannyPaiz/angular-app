import { Component, Input, inject } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { Task } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  
  private tasksService = inject(TasksService)

  // DELETE / REMOVE op
  onCompleteTask() {
    // remove task, as it is completed
    this.tasksService.removeTask(this.task.id);
  }

}
