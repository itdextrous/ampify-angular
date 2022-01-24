import { TestBed } from '@angular/core/testing';

import { TranslationFactoryService } from './translation-factory.service';

describe('TranslationFactoryService', () => {
  let service: TranslationFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslationFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
