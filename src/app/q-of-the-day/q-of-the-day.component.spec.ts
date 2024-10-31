import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QOfTheDayComponent } from './q-of-the-day.component';

describe('QOfTheDayComponent', () => {
  let component: QOfTheDayComponent;
  let fixture: ComponentFixture<QOfTheDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QOfTheDayComponent]
    });
    fixture = TestBed.createComponent(QOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
