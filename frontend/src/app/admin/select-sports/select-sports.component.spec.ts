import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSportsComponent } from './select-sports.component';

describe('SelectSportsComponent', () => {
  let component: SelectSportsComponent;
  let fixture: ComponentFixture<SelectSportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
