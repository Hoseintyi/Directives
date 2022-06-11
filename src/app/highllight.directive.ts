import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighllight]'
})
export class HighllightDirective {

  constructor(private elementref:  ElementRef, renderer: Renderer2) { }

  @Input() appHighllight: string="yellow";

  @HostListener('mouseenter') onMouseClick(){
   this.secureChangeBackGroundColor(this.appHighllight);
  };

  @HostListener('mouseleave') onMouseLeave(){
    this.secureChangeBackGroundColor('transparent');

  };


  private secureChangeBackGroundColor(color: string)
  {
    this.elementref.nativeElement.style.backgroundColor=color;
    
  }


}
