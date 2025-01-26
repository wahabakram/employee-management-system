import { TestBed } from '@angular/core/testing';

import { DatepickerHeaderService } from './datepicker-header.service';

describe('DatepickerHeaderService', () => {
  let service: DatepickerHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatepickerHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
