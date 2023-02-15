import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogininvitadoComponent } from './logininvitado.component';

describe('LogininvitadoComponent', () => {
  let component: LogininvitadoComponent;
  let fixture: ComponentFixture<LogininvitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogininvitadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogininvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
