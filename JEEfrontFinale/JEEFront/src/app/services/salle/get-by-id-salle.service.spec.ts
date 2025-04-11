import { TestBed } from '@angular/core/testing';

import { GetByIdSalleService } from './get-by-id-salle.service';

describe('GetByIdSalleService', () => {
  let service: GetByIdSalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetByIdSalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
