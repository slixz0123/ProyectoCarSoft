import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoRentaComponent } from './catalogo-renta.component';

describe('CatalogoRentaComponent', () => {
  let component: CatalogoRentaComponent;
  let fixture: ComponentFixture<CatalogoRentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogoRentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoRentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
