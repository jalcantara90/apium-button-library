import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[aaBtn]'
})
export class AaButtonDirective implements OnInit {

  constructor(private el: ElementRef<HTMLButtonElement>) {}

  ngOnInit(): void {
    this.el.nativeElement.classList.add('aa--button');
    this.el.nativeElement.classList.add(`aa--button__${this.sizeAttr}`);
    this.el.nativeElement.classList.add(`aa--button__${this.typeAttr}-${this.colorAttr}`);
  }

  get colorAttr() {
    return this.el.nativeElement.getAttribute('color') || 'primary';
  }

  get sizeAttr() {
    return this.el.nativeElement.getAttribute('size') || 'medium';
  }

  get typeAttr() {
    return this.el.nativeElement.getAttribute('type') || 'default';
  }
}
