import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ICarouselContext } from './innterfaces/app-interface';

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective implements OnInit {
  
  context: ICarouselContext | any;
  
  index: number= 0;

  timer: any;
  constructor(private templateref: TemplateRef<ICarouselContext>
    ,private viewContainerRef: ViewContainerRef) { }

  @Input('appCarouselFrom') images: string[]=[];

  @Input('appCarouselAutoPlay') 
  set auto(val: string)
  {
    val === 'No' ? this.clearAutoPlay() : this.autoPlay();
  }


 public ngOnInit() {
    this.context=
    {
      $implicit: this.images[0] ,
      controller:
      {
        next: ()=> this.next(),
        prev: ()=> this.prev()
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
this.context.$implicit=this.images[this.index] ;
  }

  public prev()
  {
    this.index--;
    if(this.index<0){
this.index=this.images.length-1;
    }
this.context.$implicit=this.images[this.index] ;
  }


  public autoPlay()
  {
    this.timer= setInterval(()=>{
      this.next()},1000
    );
  }

  public clearAutoPlay()
  {
    clearInterval(this.timer);
  }


}
