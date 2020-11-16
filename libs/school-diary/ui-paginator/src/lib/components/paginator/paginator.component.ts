import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CustomPageComponent } from '../custom-page/custom-page.component';
import { PageEvent } from '@school-diary/school-diary/domain';

@Component({
  selector: 'school-diary-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges, OnInit, OnDestroy {
  @ViewChild('customPagesContainer', { read: ViewContainerRef, static: true })
  entry: ViewContainerRef;

  @Input()
  length = 0;

  @Input()
  pageIndex: number;

  @Input()
  pageSize: number;

  @Input()
  pageSizeOptions: number[];

  @Input()
  set showTotalPages(value: number) {
    this._showTotalPages = value % 2 === 0 ? value + 1 : value;
  }

  get showTotalPages(): number {
    return this._showTotalPages;
  }

  @Output()
  page = new EventEmitter<PageEvent>();

  pageSizeOption = new FormControl(10);

  currentPage = 0;

  private unsubscribe$ = new Subject<void>();
  private rangeStart: number;
  private rangeEnd: number;
  private _showTotalPages = 5;

  constructor(private _resolver: ComponentFactoryResolver) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.length && changes.length.currentValue) {
      this.length = changes.length.currentValue;
    }

    this.initPageRange();
  }

  ngOnInit(): void {
    this.handlePageSizeOption();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  firstPage(): void {
    this.switchPage(0);
  }

  lastPage(): void {
    this.switchPage(this.lastIndex);
  }

  switchPage(currentPage: number): void {
    this.currentPage = currentPage;
    this.pageIndex = currentPage;
    this.page.emit({ pageIndex: this.pageIndex, pageSize: this.pageSizeOption.value, length: this.length });
    this.initPageRange();
  }

  get lastIndex(): number {
    return Math.floor(this.length / this.pageSize) - 1;
  }

  private buildCustomPages(): void {
    if (this.entry && this.entry.length) {
      this.entry.clear();
    }

    for (let index = 0; index < this.getNumberOfPages(); index = index + 1) {
      if (this.shouldRenderButton(index)) {
        const customPage = this._createCustomPage(index);
        this.handleSelectPage(customPage);
      }
    }
  }

  private _createCustomPage(index: number): ComponentRef<CustomPageComponent> {
    const factory = this._resolver.resolveComponentFactory(CustomPageComponent),
      component = this.entry.createComponent(factory);

    component.instance.index = index;
    component.instance.isSelected = this.isSelected(index);

    return component;
  }

  private getNumberOfPages(): number {
    return Math.ceil(this.length / this.pageSize);
  }

  private handlePageSizeOption(): void {
    this.pageSizeOption.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe((pageSize: number) => {
      this.pageSize = pageSize;

      if (pageSize * this.pageIndex > this.length) {
        this.pageIndex = Math.floor(this.length / pageSize);
      }

      this.switchPage(this.pageIndex);
    });
  }

  private handleSelectPage(customPage: ComponentRef<CustomPageComponent>): void {
    customPage.instance.selectPage.subscribe((currentPage: number) => {
      this.switchPage(currentPage);
    });
  }

  private initPageRange(): void {
    this.rangeStart = this.currentPage - this.showTotalPages / 2;
    this.rangeEnd = this.currentPage + this.showTotalPages / 2;

    this.buildCustomPages();
  }

  private isSelected(index: number): boolean {
    return index === this.pageIndex;
  }

  private shouldRenderButton(index: number): boolean {
    return (
      (index < this.showTotalPages && this.currentPage < this.showTotalPages && index > this.rangeStart) ||
      (index >= this.rangeStart && index <= this.rangeEnd)
    );
  }
}
