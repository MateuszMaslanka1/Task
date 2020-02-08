import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {SetCurrentTaskService} from '../set-current-task.service';

@Component({
  selector: 'app-task-content',
  templateUrl: './task-content.component.html',
  styleUrls: ['./task-content.component.scss']
})
export class TaskContentComponent implements AfterViewInit {

  constructor(private setCurrentTaskService: SetCurrentTaskService) {
    this.quantityOfTask = Array(12).fill(0).map((x, i) => i);
  }

  isHidden = true;
  getQuantityForTaskName = 0;
  quantityOfTaskDetails: Array<number>;
  quantityOfTask: Array<number>;
  objForQuantityNameTask = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: []
  };
  @ViewChildren('getContainer') getContainer: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.setCurrentTaskService.getInideContainer(this.getContainer);
  }

  removeTask(e) {
    e.target.parentNode.hidden = true;
  }

  addTaskName(indexOfTask: number) {
    this.getQuantityForTaskName = this.objForQuantityNameTask[indexOfTask].length;
    this.getQuantityForTaskName++;
    this.objForQuantityNameTask[indexOfTask].push(this.getQuantityForTaskName);
  }

}
