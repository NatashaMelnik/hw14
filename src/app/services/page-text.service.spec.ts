import { TestBed } from '@angular/core/testing';

import { PageTextService } from './page-text.service';

describe('PageTextService', () => {
  let service: PageTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
