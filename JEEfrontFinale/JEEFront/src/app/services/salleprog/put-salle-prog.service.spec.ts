import { TestBed } from '@angular/core/testing';

import { PutSalleProgService } from './put-salle-prog.service';

describe('PutSalleProgService', () => {
  let service: PutSalleProgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutSalleProgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
