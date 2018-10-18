import { TestBed } from '@angular/core/testing';

import { AbstractEventsService } from './abstract-events.service';

describe('AbstractEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbstractEventsService = TestBed.get(AbstractEventsService);
    expect(service).toBeTruthy();
  });
});
