import { TestBed } from '@angular/core/testing';

import { HttpsEventsService } from './https-events.service';

describe('HttpsEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpsEventsService = TestBed.get(HttpsEventsService);
    expect(service).toBeTruthy();
  });
});
