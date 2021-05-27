import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestapp]'
})
export class TestappDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'blue')
  }
  // changeBg(color: string) {
  //   this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color)
  // }

@HostListener('click') myClick(){
  this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'blue')
}

@HostListener('mouseover') myMouseOver(){
  this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'red')
}
@HostListener('mouseout') myMouseOut(){
  this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow')
}
}
