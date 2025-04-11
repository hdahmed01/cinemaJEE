import { TestBed } from '@angular/core/testing';

import { ListSeanceService } from './list-seance.service';

describe('ListSeanceService', () => {
  let service: ListSeanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListSeanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
