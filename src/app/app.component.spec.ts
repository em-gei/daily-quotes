import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

var customMatcher: any = {
  toBeGoofy: function (util, customEqualityTesters) {
    return {
      compare: function (actual, expected) {
        if (expected === undefined) {
          expected = '';
        }
        var result = {};
        result['pass'] = util.equals(actual.hyuk, "gawrsh" + expected, customEqualityTesters);
        if (result['pass']) {
          result['message'] = "Expected " + actual + " not to be quite so goofy";
        } else {
          result['message'] = "Expected " + actual + " to be goofy, but it was not very goofy";
        }
        return result;
      }
    };
  }
};



describe('AppComponent', () => {
  beforeEach(async(() => {
    jasmine.addMatchers(customMatcher);
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
    expect({
      hyuk: 'gawrsh'
    }).toBeGoofy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('What i have to do?');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    debugger;
    const compiled = fixture.debugElement.nativeElement;
    const titleElement = compiled.getElementById('title');
    expect(titleElement).toBeTruthy();
  }));

  it(`should have valid quote`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.setDailyQuote();
    expect(app.dailyQuote).toBeDefined();
  }));

  it('should render refresh button', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    // fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Refresh');
  }));

  it('Refresh should update the quote', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const compiled = fixture.debugElement.nativeElement;
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    const firstQuote = app.dailyQuote;
    button.click();
    const secondQuote = app.dailyQuote;
    expect(firstQuote !== secondQuote).toBeTruthy();
  });
});
