import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriberSearchResultComponent } from './subscriber-search-result.component';

describe('SubscriberSearchResultComponent', () => {
  let component: SubscriberSearchResultComponent;
  let fixture: ComponentFixture<SubscriberSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriberSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
