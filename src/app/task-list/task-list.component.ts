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
    this.listOfTasks=this.listOfTasks.filter(item=>item.id!==id);
  }

}
