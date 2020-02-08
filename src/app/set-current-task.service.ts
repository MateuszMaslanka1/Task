import {ElementRef, Injectable, QueryList} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetCurrentTaskService {

  constructor() { }
  private getContainer: QueryList<ElementRef>;
  private qunatityOfTaskTab: number[];
  addTask() {
    let counter = 0;
    this.getContainer.forEach((div: ElementRef) => {
      if (div.nativeElement.hidden && counter === 0) {
        div.nativeElement.hidden = false;
        counter = 1;
      }
    });
  }

  getInideContainer(getContainer: QueryList<ElementRef>) {
    this.getContainer = getContainer;
  }

  sendInfoAboutQuantityOfTask(qunatityOfTask: number) {
    this.qunatityOfTaskTab = Array(qunatityOfTask).fill(0).map((x, i) => i);
    console.log(this.qunatityOfTaskTab);
    this.getInfoAboutQuantityOfTask();
  }

  getInfoAboutQuantityOfTask() {
    return this.qunatityOfTaskTab;
  }
}
