import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  inputText: string = '';
  isEditMode = false;


  todos: string[] = [];
    deletedTodos: string[] = [];
    
 

  addValue() {  
    this.todos.push(this.inputText);
    this.inputText = '';

  }

 deleteItem(index: number) {  
    this.deletedTodos.push(this.todos[index]);
    this.todos.splice(index, 1);
  }

  clearAll() {
    this.deletedTodos = [];
  }

  updateItem(index: number) {
    if(!this.isEditMode) this.isEditMode = true;
    else  this.isEditMode = false;
    
  }
}


