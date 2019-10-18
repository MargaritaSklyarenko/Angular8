import { Directive, HostBinding, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBoldBorder]'
})
export class BoldBorderDirective {
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  @Input('appBoldBorder') width: string;

  @HostBinding('style.border-width') borderWidth: string;

  @HostListener('click')
  onClick() {
      this.renderer.setStyle(this.el.nativeElement, 'border', this.width + ' solid black');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid gray');
  }

}
