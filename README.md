import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BackgroundColorDirective } from './background-color.directive';

@Component({
  template: `<div [appBackgroundColor]="color"></div>`
})
class TestComponent {
  color: string = '';
}

describe('BackgroundColorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let testComponent: TestComponent;
  let directiveElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackgroundColorDirective, TestComponent],
    });

    fixture = TestBed.createComponent(TestComponent);
    testComponent = fixture.componentInstance;
    directiveElement = fixture.debugElement.query(By.directive(BackgroundColorDirective));
  });

  it('should apply background color to the element', () => {
    testComponent.color = 'red';
    fixture.detectChanges();

    expect(directiveElement.styles['background-color']).toBe('red');
  });

  it('should update background color when input changes', () => {
    testComponent.color = 'blue';
    fixture.detectChanges();

    expect(directiveElement.styles['background-color']).toBe('blue');

    testComponent.color = 'green';
    fixture.detectChanges();

    expect(directiveElement.styles['background-color']).toBe('green');
  });
});
