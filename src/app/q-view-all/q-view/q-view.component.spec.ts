import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QViewComponent } from './q-view.component';

describe('QViewComponent', () => {
  let component: QViewComponent;
  let fixture: ComponentFixture<QViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QViewComponent]
    });
    fixture = TestBed.createComponent(QViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
