import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadorentaComponent } from './listadorenta.component';

describe('ListadorentaComponent', () => {
  let component: ListadorentaComponent;
  let fixture: ComponentFixture<ListadorentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadorentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadorentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
