import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  inputText: string = '';

  todos: string[] = [
    'Todo 1',
    'Todo 2',
    'Todo 3',
  ];

  addValue() {  
    this.todos.push(this.inputText);
    this.inputText = '';
    

  }
}


