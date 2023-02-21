import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headerlogsidebar2Component } from './headerlogsidebar2.component';

describe('Headerlogsidebar2Component', () => {
  let component: Headerlogsidebar2Component;
  let fixture: ComponentFixture<Headerlogsidebar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Headerlogsidebar2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Headerlogsidebar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
