import { Component, OnInit } from '@angular/core';
import {SetCurrentTaskService} from '../set-current-task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor(private setCurrentTaskService: SetCurrentTaskService) { }
  qunatityOfTask = 1;

  ngOnInit() {
  }

  addTask() {
    this.qunatityOfTask++;
    this.setCurrentTaskService.addTask();
    this.setCurrentTaskService.sendInfoAboutQuantityOfTask(this.qunatityOfTask);
  }

}
