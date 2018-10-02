import { TestBed } from '@angular/core/testing';

import { CCConfigLoaderService } from './ccconfig-loader.service';

describe('CCConfigLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CCConfigLoaderService = TestBed.get(CCConfigLoaderService);
    expect(service).toBeTruthy();
  });
});
