import { TestBed } from '@angular/core/testing';

import { TransfereciaService } from './transferecia.service';

describe('TranfereciaService', () => {
  let service: TransfereciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransfereciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
