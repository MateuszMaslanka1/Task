import {ElementRef, Injectable, QueryList} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetCurrentTaskService {

  constructor() { }
  private getContainer: QueryList<ElementRef>;

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
}
