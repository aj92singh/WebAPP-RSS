import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RSSFeedComponent } from './rssfeed.component';

describe('RSSFeedComponent', () => {
  let component: RSSFeedComponent;
  let fixture: ComponentFixture<RSSFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RSSFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RSSFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
