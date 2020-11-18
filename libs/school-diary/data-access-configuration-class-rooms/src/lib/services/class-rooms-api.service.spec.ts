import { TestBed } from '@angular/core/testing';

import { ClassRoomsApiService } from './class-rooms-api.service';

describe('ClassRoomsApiService', () => {
  let service: ClassRoomsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassRoomsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
