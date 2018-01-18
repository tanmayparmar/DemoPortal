import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberSearchComponent } from './subscriber-search.component';

describe('SubscriberSearchComponent', () => {
  let component: SubscriberSearchComponent;
  let fixture: ComponentFixture<SubscriberSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
