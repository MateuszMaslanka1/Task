import {ElementRef, Injectable, QueryList} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetCurrentTaskService {

  constructor() { }
  private getContainer: QueryList<ElementRef>;
  qunatityOfTaskTab = [1];
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
  }
}
