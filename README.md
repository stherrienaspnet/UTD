import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

@Component({
  template: `<div appHighlight [highlightColor]="color">Highlight me!</div>`
})
class TestComponent {
  color = 'yellow';
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, HighlightDirective]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should highlight the element on mouseover', () => {
    fixture.detectChanges();

    const divElement = fixture.debugElement.query(By.css('div')).nativeElement;

    expect(divElement.style.backgroundColor).toBe('');

    divElement.dispatchEvent(new Event('mouseover'));

    expect(divElement.style.backgroundColor).toBe('yellow');
  });

  it('should remove highlight on mouseleave', () => {
    fixture.detectChanges();

    const divElement = fixture.debugElement.query(By.css('div')).nativeElement;

    divElement.style.backgroundColor = 'yellow';

    expect(divElement.style.backgroundColor).toBe('yellow');

    divElement.dispatchEvent(new Event('mouseleave'));

    expect(divElement.style.backgroundColor).toBe('');
  });

  it('should change highlight color based on input', () => {
    fixture.detectChanges();

    const divElement = fixture.debugElement.query(By.css('div')).nativeElement;

    expect(divElement.style.backgroundColor).toBe('yellow');

    component.color = 'cyan';
    fixture.detectChanges();

    expect(divElement.style.backgroundColor).toBe('cyan');
  });
});
