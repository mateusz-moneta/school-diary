import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonHoursListComponent } from './lesson-hours-list.component';

describe('LessonHoursListComponent', () => {
  let component: LessonHoursListComponent;
  let fixture: ComponentFixture<LessonHoursListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonHoursListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonHoursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
