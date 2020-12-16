import { TestBed } from '@angular/core/testing';

import { TranslationsApiService } from './subjects-api.service';

describe('SubjectsApiService', () => {
  let service: TranslationsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslationsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
