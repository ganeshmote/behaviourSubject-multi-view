import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

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


@HostBinding('style.backgroundColor') bgColor="green"

@HostListener('click') myClick(){
  // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'blue')
  this.bgColor='blue';
}

@HostListener('mouseover') myMouseOver(){
  // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'red')
}
@HostListener('mouseout') myMouseOut(){
  // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow')
}
}
