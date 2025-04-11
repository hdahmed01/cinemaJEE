import { TestBed } from '@angular/core/testing';

import { DeleteSalleService } from './delete-salle.service';

describe('DeleteSalleService', () => {
  let service: DeleteSalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteSalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
