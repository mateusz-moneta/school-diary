import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[schoolDiaryCarouselItem]'
})
export class CarouselItemDirective {
  constructor(public templateRef: TemplateRef<any>) { }
}
