import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudRentaClienteComponent } from './solicitud-renta-cliente.component';

describe('SolicitudRentaClienteComponent', () => {
  let component: SolicitudRentaClienteComponent;
  let fixture: ComponentFixture<SolicitudRentaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudRentaClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudRentaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
