import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
  }

  addTodo(task: string) {
    let newTodo = new TodoItem(task);
    this.todoService.addTodo(newTodo);
  }

  updateTodo(todo: TodoItem) {
    this.todoService.updateTodo(todo);
  }

  removeTodo(todo: TodoItem) {
    this.todoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoService.getAllTodos();
  }

  log() {
    console.log(this.todos);
  }

}

export class TodoItem {
  id: number;
  task: string;
  checked: boolean;

  constructor(task: string) {
    this.task = task;
    this.checked = false;
  }

}