import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {SetCurrentTaskService} from '../set-current-task.service';

@Component({
  selector: 'app-task-content',
  templateUrl: './task-content.component.html',
  styleUrls: ['./task-content.component.scss']
})
export class TaskContentComponent implements AfterViewInit {

  constructor(private setCurrentTaskService: SetCurrentTaskService) { }

  isHidden = true;
  @ViewChildren('getContainer') getContainer: QueryList<ElementRef>;

  ngAfterViewInit() {
    this.setCurrentTaskService.getInideContainer(this.getContainer);
  }

}
