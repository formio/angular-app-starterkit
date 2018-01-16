import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventResourceComponent } from './event-resource.component';

describe('EventResourceComponent', () => {
  let component: EventResourceComponent;
  let fixture: ComponentFixture<EventResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
