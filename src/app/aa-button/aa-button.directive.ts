import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Slot, BtnType, Size, Color } from './button-types';

@Directive({
  selector: '[aaBtn]'
})
export class AaButtonDirective implements OnInit {

  constructor(private el: ElementRef<HTMLButtonElement>, private renderer: Renderer2) {}

  ngOnInit(): void {

    this.renderer.addClass(this.el.nativeElement, 'aa--button');
    this.renderer.addClass(this.el.nativeElement, `aa--button__${this.sizeAttr}`);
    this.renderer.addClass(this.el.nativeElement, `aa--button__${this.typeAttr}-${this.colorAttr}`);

    if (this.iconAttr) {
      const span = this.renderer.createElement('span');
      this.renderer.addClass(span, 'fas');
      this.renderer.addClass(span, `fa-${this.iconAttr}`);
      this.setIcon(this.slotAttr, span);
    }
  }

  get colorAttr(): Color {
    return this.el.nativeElement.getAttribute('color') as Color || 'primary';
  }

  get sizeAttr(): Size {
    return this.el.nativeElement.getAttribute('size') as Size || 'medium';
  }

  get typeAttr(): BtnType {
    return this.el.nativeElement.getAttribute('type') as BtnType || 'default';
  }

  get iconAttr() {
    return this.el.nativeElement.getAttribute('icon');
  }

  get slotAttr(): Slot {
    return this.el.nativeElement.getAttribute('slot') as Slot || 'right';
  }

  private setIcon(slot: Slot, span: ElementRef) {
    switch (slot) {
      case 'left': {
        const text: ChildNode = this.el.nativeElement.childNodes[0];
        this.renderer.removeChild(this.el.nativeElement, text);
        this.renderer.appendChild(this.el.nativeElement, span);
        this.renderer.appendChild(this.el.nativeElement, text);
        break;
      }

      case 'icon-only': {
        const text: ChildNode = this.el.nativeElement.childNodes[0];
        this.renderer.removeChild(this.el.nativeElement, text);
        this.renderer.appendChild(this.el.nativeElement, span);
        break;
      }

      default:
        this.renderer.appendChild(this.el.nativeElement, span);
        break;
    }
  }
}
