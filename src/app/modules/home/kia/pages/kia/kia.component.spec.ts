import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiaComponent } from './kia.component';

describe('KiaComponent', () => {
  let component: KiaComponent;
  let fixture: ComponentFixture<KiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
