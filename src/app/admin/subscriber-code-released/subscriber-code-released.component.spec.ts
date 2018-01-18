import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberCodeReleasedComponent } from './subscriber-code-released.component';

describe('SubscriberCodeReleasedComponent', () => {
  let component: SubscriberCodeReleasedComponent;
  let fixture: ComponentFixture<SubscriberCodeReleasedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberCodeReleasedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberCodeReleasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
