import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonProductComponent } from './button-product.component';

describe('ButtonProductComponent', () => {
  let component: ButtonProductComponent;
  let fixture: ComponentFixture<ButtonProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
