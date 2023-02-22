import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterClaseComponent } from './register-clase.component';

describe('RegisterClaseComponent', () => {
  let component: RegisterClaseComponent;
  let fixture: ComponentFixture<RegisterClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterClaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
