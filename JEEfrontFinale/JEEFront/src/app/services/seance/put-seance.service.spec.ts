import { TestBed } from '@angular/core/testing';

import { PutSeanceService } from './put-seance.service';

describe('PutSeanceService', () => {
  let service: PutSeanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutSeanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
