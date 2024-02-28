import { TestBed } from '@angular/core/testing';

import { IconStoreService } from './icon-store.service';

describe('IconStoreService', () => {
  let service: IconStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
