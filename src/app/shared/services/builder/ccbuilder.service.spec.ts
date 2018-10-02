import { TestBed } from '@angular/core/testing';

import { CCBuilderService } from './ccbuilder.service';

describe('CCBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CCBuilderService = TestBed.get(CCBuilderService);
    expect(service).toBeTruthy();
  });
});
