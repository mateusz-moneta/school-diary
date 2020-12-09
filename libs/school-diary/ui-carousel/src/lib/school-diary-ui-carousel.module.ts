import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselElementDirective } from './directives/carousel-element.directive';
import { CarouselItemDirective } from './directives/carousel-item.directive';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CarouselComponent, CarouselElementDirective, CarouselItemDirective],
  imports: [CommonModule, MatIconModule],
  exports: [CarouselComponent, CarouselItemDirective]
})
export class SchoolDiaryUiCarouselModule {}
