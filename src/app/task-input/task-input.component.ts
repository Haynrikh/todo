import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent implements OnInit {

  @Input() listOfTasks: any[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  addTasks(task: string): void {
    this.listOfTasks.push({id: this.listOfTasks.length+1, name: task});
  }

}
