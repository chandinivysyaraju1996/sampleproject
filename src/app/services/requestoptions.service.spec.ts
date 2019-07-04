import { TestBed } from '@angular/core/testing';

import { RequestoptionsService } from './requestoptions.service';

describe('RequestoptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestoptionsService = TestBed.get(RequestoptionsService);
    expect(service).toBeTruthy();
  });
});
