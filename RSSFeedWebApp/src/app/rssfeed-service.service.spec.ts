import { TestBed } from '@angular/core/testing';

import { RSSFeedServiceService } from './rssfeed-service.service';

describe('RSSFeedServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RSSFeedServiceService = TestBed.get(RSSFeedServiceService);
    expect(service).toBeTruthy();
  });
});
