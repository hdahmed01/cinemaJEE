import { TestBed } from '@angular/core/testing';

import { PutDebiteService } from './put-debite.service';

describe('PutDebiteService', () => {
  let service: PutDebiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PutDebiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
