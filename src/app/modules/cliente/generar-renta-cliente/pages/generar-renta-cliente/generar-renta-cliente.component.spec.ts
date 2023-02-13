import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarRentaClienteComponent } from './generar-renta-cliente.component';

describe('GenerarRentaClienteComponent', () => {
  let component: GenerarRentaClienteComponent;
  let fixture: ComponentFixture<GenerarRentaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarRentaClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarRentaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
