import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ICarouselContext } from './innterfaces/app-interface';

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements OnInit {
  
  context: ICarouselContext | null= null;
  
  index: number=0;
  constructor(private templateref: TemplateRef<ICarouselContext>
    ,private viewContainerRef: ViewContainerRef) { }

  @Input('appCarouselFrom') images: string[]=[];

 public ngOnInit() {
    this.context=
    {
      $implicit: this.images[0] ,
      controller:
      {
        next: ()=> this.next,
        prev: ()=> this.prev
      }
    }

    this.viewContainerRef.createEmbeddedView(this.templateref, this.context);
  }

  public next()
  {
    this.index++;
    if(this.index>=this.images.length){
      
      this.index=0;
    }
//this.context.$implicit=this.images[this.index] ;
  }

  public prev()
  {
    this.index--;
    if(this.index<0){
this.index=this.images.length-1;
    }
//this.context.$implicit=this.images[this.index] ;
  }
}
