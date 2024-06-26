import { Component } from '@angular/core';

interface Task {
  done: boolean;
  description: string;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {
  taskList: Task[] = []
  newTaskDescription: string = '';

  constructor() {
    this.taskList = [
      {done: false, description: "Clean the house"},
      {done: false, description: "Wash the car"},
      {done: true, description: "Feed the dog"},
    ]
  }

  changeTask(task: Task) {
    task.done = !task.done
  }

  addTask(taskDescription: string) {
    this.taskList.push({done: false, description: taskDescription});
  }

  removeTask(taskDescription: string) {
    this.taskList = this.taskList.filter(task => task.description !== taskDescription);
  }
}
