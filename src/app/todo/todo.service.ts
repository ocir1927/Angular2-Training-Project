import { Injectable } from '@angular/core';
import { TodoItem } from './todo.component';

@Injectable()
export class TodoService {

  constructor() { }
  lastId: number = 0;
  todos: TodoItem[] = [];

  addTodo(todo: TodoItem) {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this.todos;
  }

  deleteTodoById(id: number) {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  getAllTodos(): TodoItem[] {
    return this.todos;
  }

  updateTodo(todo: TodoItem) {
    let todo1 = this.todos.find(searchedTodo => searchedTodo.id == todo.id);
    todo1.checked = todo.checked;
    console.log(this.todos);
  }


}
