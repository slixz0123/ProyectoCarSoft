import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSeguroComponent } from './list-seguro.component';

describe('ListSeguroComponent', () => {
  let component: ListSeguroComponent;
  let fixture: ComponentFixture<ListSeguroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSeguroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
