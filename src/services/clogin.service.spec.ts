import { TestBed } from '@angular/core/testing';

import { CloginService } from './clogin.service';

describe('CloginService', () => {
  let service: CloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
