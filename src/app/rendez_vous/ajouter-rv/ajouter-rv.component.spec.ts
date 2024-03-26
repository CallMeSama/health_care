import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRvComponent } from './ajouter-rv.component';

describe('AjouterRvComponent', () => {
  let component: AjouterRvComponent;
  let fixture: ComponentFixture<AjouterRvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterRvComponent]
    });
    fixture = TestBed.createComponent(AjouterRvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
