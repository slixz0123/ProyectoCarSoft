import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClaseComponent } from './list-clase.component';

describe('ListClaseComponent', () => {
  let component: ListClaseComponent;
  let fixture: ComponentFixture<ListClaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListClaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListClaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
