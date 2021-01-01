import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedsComponent } from './news-feeds.component';

describe('NewsFeedsComponent', () => {
  let component: NewsFeedsComponent;
  let fixture: ComponentFixture<NewsFeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
