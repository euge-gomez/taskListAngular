import { Component, OnInit } from '@angular/core';
import {Task} from "../../Task";
import { TaskService } from '../../service/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  task: Task[] = []
  
  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks) => (
      this.task = tasks
    ));
  }
}
