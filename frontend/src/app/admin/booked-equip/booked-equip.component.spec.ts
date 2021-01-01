import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedEquipComponent } from './booked-equip.component';

describe('BookedEquipComponent', () => {
  let component: BookedEquipComponent;
  let fixture: ComponentFixture<BookedEquipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedEquipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
