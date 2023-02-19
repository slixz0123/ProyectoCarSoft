import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderlogsidebarComponent } from './headerlogsidebar.component';

describe('HeaderlogsidebarComponent', () => {
  let component: HeaderlogsidebarComponent;
  let fixture: ComponentFixture<HeaderlogsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderlogsidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderlogsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
