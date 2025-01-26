import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinDateHeaderComponent } from './join-date-header.component';

describe('JoinDateHeaderComponent', () => {
  let component: JoinDateHeaderComponent;
  let fixture: ComponentFixture<JoinDateHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoinDateHeaderComponent]
    });
    fixture = TestBed.createComponent(JoinDateHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
