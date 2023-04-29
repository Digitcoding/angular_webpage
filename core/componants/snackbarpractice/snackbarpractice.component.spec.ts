import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarpracticeComponent } from './snackbarpractice.component';

describe('SnackbarpracticeComponent', () => {
  let component: SnackbarpracticeComponent;
  let fixture: ComponentFixture<SnackbarpracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackbarpracticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackbarpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
