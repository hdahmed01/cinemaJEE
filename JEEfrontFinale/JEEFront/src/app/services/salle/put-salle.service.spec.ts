import { TestBed } from '@angular/core/testing';

import { PutSalleService } from './put-salle.service';

describe('PutSalleService', () => {
  let service: PutSalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutSalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
