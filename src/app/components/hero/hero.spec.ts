import {HeroComponent} from './hero';
import {TestBed, async} from '@angular/core/testing';

describe('hero component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeroComponent
      ]
    });
    TestBed.compileComponents();
  }));

  it('should render Welcome', () => {
    const fixture = TestBed.createComponent(HeroComponent);
    fixture.detectChanges();
    const title = fixture.nativeElement;
    expect(title.querySelector('h2').textContent.trim()).toBe('Welcome to your &lt;<span class="text-blue">form</span>.<span class="text-green">io</span>&gt; application!');
  });
});
