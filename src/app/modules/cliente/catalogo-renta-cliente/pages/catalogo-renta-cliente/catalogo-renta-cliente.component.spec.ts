import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoRentaClienteComponent } from './catalogo-renta-cliente.component';

describe('CatalogoRentaClienteComponent', () => {
  let component: CatalogoRentaClienteComponent;
  let fixture: ComponentFixture<CatalogoRentaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoRentaClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoRentaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
