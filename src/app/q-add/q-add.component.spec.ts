import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QAddComponent } from './q-add.component';

describe('QAddComponent', () => {
  let component: QAddComponent;
  let fixture: ComponentFixture<QAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QAddComponent]
    });
    fixture = TestBed.createComponent(QAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
