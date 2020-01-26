import { Component, OnInit } from '@angular/core';
import {SetCurrentTaskService} from '../set-current-task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor(private setCurrentTaskService: SetCurrentTaskService) { }

  ngOnInit() {
  }

  addTask() {
    this.setCurrentTaskService.addTask();
  }

}
