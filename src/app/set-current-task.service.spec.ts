import { TestBed } from '@angular/core/testing';

import { SetCurrentTaskService } from './set-current-task.service';

describe('SetCurrentTaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetCurrentTaskService = TestBed.get(SetCurrentTaskService);
    expect(service).toBeTruthy();
  });
});
