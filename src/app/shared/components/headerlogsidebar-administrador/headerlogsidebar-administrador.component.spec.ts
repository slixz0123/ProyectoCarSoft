import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderlogsidebarAdministradorComponent } from './headerlogsidebar-administrador.component';

describe('HeaderlogsidebarAdministradorComponent', () => {
  let component: HeaderlogsidebarAdministradorComponent;
  let fixture: ComponentFixture<HeaderlogsidebarAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderlogsidebarAdministradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderlogsidebarAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
