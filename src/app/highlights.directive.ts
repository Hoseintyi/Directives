// this is not hilight Directives , this is a Directive For ColorFull inputs

import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  randomColors: string[]=[ 
    '#FF5733','#93FF33','#33FFFF','#EA1E5F'
];
  
  constructor() { }

  @HostBinding('style.color') color: string | undefined;

 // @HostBinding('style.background-color') bgColor: string | undefined;

  @HostListener('keydown') newColor()
  {
   const index = Math.floor(Math.random()*this.randomColors.length);
   this.color=this.randomColors[index];
  }

}
