import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenidoEmpleadoComponent } from './bienvenido-empleado.component';

describe('BienvenidoEmpleadoComponent', () => {
  let component: BienvenidoEmpleadoComponent;
  let fixture: ComponentFixture<BienvenidoEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BienvenidoEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BienvenidoEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
