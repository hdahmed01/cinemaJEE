import { TestBed } from '@angular/core/testing';

import { GetSeanceByIdService } from './get-seance-by-id.service';

describe('GetSeanceByIdService', () => {
  let service: GetSeanceByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSeanceByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
