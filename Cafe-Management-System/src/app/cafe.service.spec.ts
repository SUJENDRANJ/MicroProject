import { TestBed } from '@angular/core/testing';

import { cafeService } from './cafe.service';

describe('CafeService', () => {
  let service: cafeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(cafeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
