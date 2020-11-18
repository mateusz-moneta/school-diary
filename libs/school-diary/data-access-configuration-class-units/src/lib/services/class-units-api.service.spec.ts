import { TestBed } from '@angular/core/testing';

import { ClassUnitsApiService } from './class-units-api.service';

describe('ClassUnitsApiService', () => {
  let service: ClassUnitsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassUnitsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
