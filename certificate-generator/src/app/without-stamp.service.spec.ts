import { TestBed } from '@angular/core/testing';

import { WithoutStampService } from './without-stamp.service';

describe('WithoutStampService', () => {
  let service: WithoutStampService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WithoutStampService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
