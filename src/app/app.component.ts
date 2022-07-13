import { Component, Output } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headline: string = 'Svelte & Cosmic JS App'

  listOfTasks: Object[] = [
    {
      id:1,
      name: 'Task 1'
    },
    {
      id:2,
      name: 'Task 2'
    },
    {
      id:3,
      name: 'Task 3'
    },
    {
      id:4,
      name: 'Task 4'
    },
  ];

}
