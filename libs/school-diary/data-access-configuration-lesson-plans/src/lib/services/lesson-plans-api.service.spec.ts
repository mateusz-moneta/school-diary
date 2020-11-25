import { TestBed } from '@angular/core/testing';

import { LessonPlansApiService } from './lesson-plans-api.service';

describe('LessonPlansApiService', () => {
  let service: LessonPlansApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonPlansApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
