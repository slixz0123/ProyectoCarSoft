import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproveeRentaComponent } from './aprovee-renta.component';

describe('AproveeRentaComponent', () => {
  let component: AproveeRentaComponent;
  let fixture: ComponentFixture<AproveeRentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AproveeRentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AproveeRentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
