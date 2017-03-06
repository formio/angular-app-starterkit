import {Component} from '@angular/core';
import {TestBed, async} from '@angular/core/testing';
import {MainComponent} from './main';

@Component({selector: 'formio-footer', template: ''})
class MockFooterComponent {}
@Component({selector: 'formio-header', template: ''})
class MockHeaderComponent {}
@Component({selector: 'formio-hero', template: ''})
class MockHeroComponent {}

describe('Main Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        MockFooterComponent,
        MockHeaderComponent,
        MockHeroComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render the header, title, techs and footer', () => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const main = fixture.nativeElement;
    expect(main.querySelector('formio-header')).toBeDefined();
    expect(main.querySelector('formio-hero')).toBeDefined();
    expect(main.querySelector('formio-footer')).toBeDefined();
  });
});
