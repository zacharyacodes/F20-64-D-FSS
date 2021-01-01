import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedGroundsComponent } from './booked-grounds.component';

describe('BookedGroundsComponent', () => {
  let component: BookedGroundsComponent;
  let fixture: ComponentFixture<BookedGroundsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedGroundsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedGroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
