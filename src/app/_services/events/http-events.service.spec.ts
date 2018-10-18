import { TestBed } from '@angular/core/testing';

import { HttpEventsService } from './http-events.service';

describe('HttpEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpEventsService = TestBed.get(HttpEventsService);
    expect(service).toBeTruthy();
  });
});
