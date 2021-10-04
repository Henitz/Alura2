import { TestBed } from '@angular/core/testing';

import { TranfereciaService } from './tranferecia.service';

describe('TranfereciaService', () => {
  let service: TranfereciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranfereciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
