import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderlogsidebarClienteComponent } from './headerlogsidebar-cliente.component';

describe('HeaderlogsidebarClienteComponent', () => {
  let component: HeaderlogsidebarClienteComponent;
  let fixture: ComponentFixture<HeaderlogsidebarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderlogsidebarClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderlogsidebarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
