import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasosComponent } from './pasos.component';

describe('PasosComponent', () => {
  let component: PasosComponent;
  let fixture: ComponentFixture<PasosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
