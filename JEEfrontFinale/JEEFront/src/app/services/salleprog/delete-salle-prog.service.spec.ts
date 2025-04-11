import { TestBed } from '@angular/core/testing';

import { DeleteSalleProgService } from './delete-salle-prog.service';

describe('DeleteSalleProgService', () => {
  let service: DeleteSalleProgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteSalleProgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
