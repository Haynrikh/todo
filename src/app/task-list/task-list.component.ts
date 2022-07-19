import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() listOfTasks: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  removeTask(id: number) {
    for (let i = 0; i < this.listOfTasks.length; i++) {
      if (this.listOfTasks[i].id == id) {
        this.listOfTasks.splice(i, 1);
      }
    }
  }
}
