import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnForDataComponent } from './column-for-data.component';

describe('ColumnForDataComponent', () => {
  let component: ColumnForDataComponent;
  let fixture: ComponentFixture<ColumnForDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnForDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnForDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
