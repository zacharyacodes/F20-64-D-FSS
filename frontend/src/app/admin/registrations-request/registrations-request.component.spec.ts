import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationsRequestComponent } from './registrations-request.component';

describe('RegistrationsRequestComponent', () => {
  let component: RegistrationsRequestComponent;
  let fixture: ComponentFixture<RegistrationsRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationsRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationsRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
