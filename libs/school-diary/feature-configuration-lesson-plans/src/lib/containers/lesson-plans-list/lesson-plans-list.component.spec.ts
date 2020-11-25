import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonPlansListComponent } from './lesson-plans-list.component';

describe('LessonPlansListComponent', () => {
  let component: LessonPlansListComponent;
  let fixture: ComponentFixture<LessonPlansListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonPlansListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonPlansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
