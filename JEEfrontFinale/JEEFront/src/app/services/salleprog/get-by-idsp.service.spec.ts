import { TestBed } from '@angular/core/testing';

import { GetByIdspService } from './get-by-idsp.service';

describe('GetByIdspService', () => {
  let service: GetByIdspService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetByIdspService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
