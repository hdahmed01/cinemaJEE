import { TestBed } from '@angular/core/testing';

import { DeleteSeanceService } from './delete-seance.service';

describe('DeleteSeanceService', () => {
  let service: DeleteSeanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteSeanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
