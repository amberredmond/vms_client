import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOptionComponent } from './manage-option.component';

describe('ManageOptionComponent', () => {
  let component: ManageOptionComponent;
  let fixture: ComponentFixture<ManageOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageOptionComponent]
    });
    fixture = TestBed.createComponent(ManageOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
