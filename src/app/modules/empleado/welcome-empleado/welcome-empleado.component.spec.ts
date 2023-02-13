import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeEmpleadoComponent } from './welcome-empleado.component';

describe('WelcomeEmpleadoComponent', () => {
  let component: WelcomeEmpleadoComponent;
  let fixture: ComponentFixture<WelcomeEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeEmpleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
