import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberUnregisteredComponent } from './subscriber-unregistered.component';

describe('SubscriberUnregisteredComponent', () => {
  let component: SubscriberUnregisteredComponent;
  let fixture: ComponentFixture<SubscriberUnregisteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberUnregisteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberUnregisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
