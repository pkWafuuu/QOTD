import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QViewAllComponent } from './q-view-all.component';

describe('QViewAllComponent', () => {
  let component: QViewAllComponent;
  let fixture: ComponentFixture<QViewAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QViewAllComponent]
    });
    fixture = TestBed.createComponent(QViewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
