import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OppMenuComponent } from './opp-menu.component';

describe('OppMenuComponent', () => {
  let component: OppMenuComponent;
  let fixture: ComponentFixture<OppMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OppMenuComponent]
    });
    fixture = TestBed.createComponent(OppMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
