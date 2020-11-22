import { TestBed } from '@angular/core/testing';

import { AssignmentsApiService } from './assignments-api.service';

describe('AssignmentsApiService', () => {
  let service: AssignmentsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignmentsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
