import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppService } from './service/app.service';
import { DebugElement } from '../../node_modules/@angular/core';
import { $ } from '../../node_modules/protractor';
import { By } from '../../node_modules/@types/selenium-webdriver';

// Describe(string, function), Jasmine global function
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let app: AppComponent;
  let fakeAppService: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        AppService
      ]
    }).compileComponents();

    // Setting
    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;
    app = debugElement.componentInstance;

    fakeAppService = jasmine.createSpyObj(fakeAppService, ['getDefaultTodo']);
    fakeAppService.getDefaultTodo.and.returnValue('prova');
  }));

  // UNIT TEST

  // it(string, function), Jasmine global function
  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'What i have to do?'`, async(() => {
    expect(app.title).toEqual('What i have to do?');
  }));

  it('addTodo() should increment array length by 1', () => {
    let arrayLength = app.todoArray.length;
    app.todoInput = 'prova';
    app.addTodo();
    expect(app.todoArray.length).toBe(arrayLength + 1);
  });

  // INTEGRATION TEST
  it('should not render deleteSelected button when checkedArray.lenth = 0', async(() => {
    expect(app.checkedArray.length).toBe(0);
    expect(document.getElementById('deleteSelectedButton')).toBeNull();
  }));

  it('AppService should be called', () => {
    fakeAppService.getDefaultTodo();
    expect(fakeAppService.getDefaultTodo).toHaveBeenCalled();
  });

  it('AppService getDefaultTodo should return prova', () => {
    const todo = fakeAppService.getDefaultTodo();
    expect(todo).toBe('prova');
  });
});
