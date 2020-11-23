import { TestBed } from '@angular/core/testing';

import { LessonPlansGuard } from './lesson-plans.guard';

describe('LessonPlansGuard', () => {
  let guard: LessonPlansGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LessonPlansGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
