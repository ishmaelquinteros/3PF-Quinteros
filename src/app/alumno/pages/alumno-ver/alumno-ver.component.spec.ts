import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoVerComponent } from './alumno-ver.component';

describe('AlumnoVerComponent', () => {
  let component: AlumnoVerComponent;
  let fixture: ComponentFixture<AlumnoVerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoVerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
