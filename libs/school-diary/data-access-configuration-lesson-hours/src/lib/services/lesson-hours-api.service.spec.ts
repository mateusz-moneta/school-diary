import { TestBed } from '@angular/core/testing';

import { LessonHoursApiService } from './lesson-hours-api.service';

describe('LessonHoursApiService', () => {
  let service: LessonHoursApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonHoursApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
