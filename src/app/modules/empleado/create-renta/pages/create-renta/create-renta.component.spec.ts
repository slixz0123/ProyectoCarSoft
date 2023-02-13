import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRentaComponent } from './create-renta.component';

describe('CreateRentaComponent', () => {
  let component: CreateRentaComponent;
  let fixture: ComponentFixture<CreateRentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
