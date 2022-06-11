export interface ICarouselContext
{
  $implicit: string,
  controller: 
  {
      next: ()=> void,
      prev: ()=> void
  }
}