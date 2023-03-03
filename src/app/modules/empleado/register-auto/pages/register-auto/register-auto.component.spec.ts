import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAutoComponent } from './register-auto.component';

describe('RegisterAutoComponent', () => {
  let component: RegisterAutoComponent;
  let fixture: ComponentFixture<RegisterAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
