import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberProfileDetailsComponent } from './subscriber-profile-details.component';

describe('SubscriberProfileDetailsComponent', () => {
  let component: SubscriberProfileDetailsComponent;
  let fixture: ComponentFixture<SubscriberProfileDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberProfileDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
