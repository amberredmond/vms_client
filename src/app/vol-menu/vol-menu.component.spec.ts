import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolMenuComponent } from './vol-menu.component';

describe('VolMenuComponent', () => {
  let component: VolMenuComponent;
  let fixture: ComponentFixture<VolMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolMenuComponent]
    });
    fixture = TestBed.createComponent(VolMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
