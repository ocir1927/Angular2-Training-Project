import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetboxComponentComponent } from './tweetbox-component.component';

describe('TweetboxComponentComponent', () => {
  let component: TweetboxComponentComponent;
  let fixture: ComponentFixture<TweetboxComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetboxComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetboxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
