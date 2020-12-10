import { TestBed } from '@angular/core/testing';

import { LessonPlanExistGuard } from './lesson-plan-exist.guard';

describe('LessonPlanExistGuard', () => {
  let guard: LessonPlanExistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LessonPlanExistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
