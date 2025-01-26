import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndDateHeaderComponent } from './end-date-header.component';

describe('EndDateHeaderComponent', () => {
  let component: EndDateHeaderComponent;
  let fixture: ComponentFixture<EndDateHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndDateHeaderComponent]
    });
    fixture = TestBed.createComponent(EndDateHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
