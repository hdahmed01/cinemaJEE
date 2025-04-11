import { TestBed } from '@angular/core/testing';

import { PutCompteService } from './put-compte.service';

describe('PutCompteService', () => {
  let service: PutCompteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutCompteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
