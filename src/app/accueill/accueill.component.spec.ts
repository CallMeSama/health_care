import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueillComponent } from './accueill.component';

describe('AccueillComponent', () => {
  let component: AccueillComponent;
  let fixture: ComponentFixture<AccueillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueillComponent]
    });
    fixture = TestBed.createComponent(AccueillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
