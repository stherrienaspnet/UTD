// src/app/bold.directive.spec.ts

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BoldDirective } from './bold.directive';

@Component({
  template: `<div appBold>This is a test</div>`
})
class TestComponent { }

describe('BoldDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoldDirective, TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    des = fixture.debugElement.queryAll(By.directive(BoldDirective));
  });

  it('should create an instance', () => {
    const directive = new BoldDirective(null, null);
    expect(directive).toBeTruthy();
  });

  it('should apply bold style to the element', () => {
    expect(des.length).toBe(1);
    const fontWeight = des[0].nativeElement.style.fontWeight;
    expect(fontWeight).toBe('bold');
  });
});
