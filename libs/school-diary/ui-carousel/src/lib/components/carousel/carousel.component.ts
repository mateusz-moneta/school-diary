import { AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';

import { CarouselElementDirective } from '../../directives/carousel-element.directive';
import { CarouselItemDirective } from '../../directives/carousel-item.directive';

@Component({
  selector: 'school-diary-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
  @ViewChildren(CarouselElementDirective, { read: ElementRef }) private itemsElements: QueryList<ElementRef>;
  @ViewChild('carousel') private carousel: ElementRef;
  @Input() timing = '250ms ease-in';
  @Input() showControls = true;
  @Output() valueChange = new EventEmitter<number>();

  carouselWrapperStyle = {};

  private currentSlide = 0;
  private itemWidth: number;
  private player: AnimationPlayer;

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.changeItemWidth();
  }

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange($event?: Event) {
    this.changeItemWidth();
  }

  constructor(private builder: AnimationBuilder) {}

  ngAfterViewInit(): void {
    this.changeItemWidth();
  }

  next(): void {
    if (this.currentSlide + 1 === this.items.length) {
      return;
    }

    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
    this.valueChange.emit(this.currentSlide);
  }

  prev(): void {
    if (this.currentSlide === 0) {
      return;
    }

    this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;

    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
    this.valueChange.emit(this.currentSlide);
  }

  private changeItemWidth(): void {
    this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
    this.carouselWrapperStyle = {
      width: `${this.itemWidth}px`
    };
  }

  private buildAnimation(offset): AnimationFactory {
    return this.builder.build([
      animate(this.timing, style({transform: `translateX(-${offset}px)`}))
    ]);
  }
}
