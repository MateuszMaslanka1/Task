import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {SetCurrentTaskService} from '../set-current-task.service';

@Component({
  selector: 'app-task-content',
  templateUrl: './task-content.component.html',
  styleUrls: ['./task-content.component.scss']
})
export class TaskContentComponent implements AfterViewInit {

  constructor(private setCurrentTaskService: SetCurrentTaskService) {}

  isHidden = true;
  getQuantityForTaskName = 0;
  quantityOfTaskDetails: Array<number>;
  quantityOfTask: Array<number>;
  objForQuantityNameTask = {};
  @ViewChildren('getContainer') getContainer: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.setCurrentTaskService.getInideContainer(this.getContainer);
  }

  removeTask(e) {
    e.target.parentNode.hidden = true;
  }

  addTaskName(indexOfTask: number) {
    if (!this.objForQuantityNameTask[indexOfTask]) {
      this.objForQuantityNameTask[indexOfTask] = [];
    }
    this.getQuantityForTaskName = this.objForQuantityNameTask[indexOfTask].length;
    this.getQuantityForTaskName++;
    this.objForQuantityNameTask[indexOfTask].push(this.getQuantityForTaskName);
  }

}
