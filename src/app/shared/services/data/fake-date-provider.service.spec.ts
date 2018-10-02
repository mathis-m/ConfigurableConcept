import { TestBed } from '@angular/core/testing';

import { FakeDateProviderService } from './fake-date-provider.service';

describe('FakeDateProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeDateProviderService = TestBed.get(FakeDateProviderService);
    expect(service).toBeTruthy();
  });
});
