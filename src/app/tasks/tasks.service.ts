import { Injectable } from "@angular/core";
import  { DUMMY_TASKS } from "../dummy-tasks";
import { NewTaskData, Task } from "./tasks.model";

@Injectable({ providedIn: 'root' })
export class TasksService {

    private tasks:Task[] = DUMMY_TASKS;

    constructor() { 
        const tasks = localStorage.getItem('tasks');
        if(tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    // GET ALL
    getUserTasks(userId: string) {
        return this.tasks.filter(
            (task) => task.userId === userId
        );
     }

     // ADD ONE TASK
    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
        });
        // sets localStorage with new a Task 
        this.saveTasks();
     }

     // REMOVE ONE TASK
    removeTask(id: string) {
        this.tasks = this.tasks.filter(
            (task) => task.id !== id);
            this.saveTasks();
     }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
     }

}